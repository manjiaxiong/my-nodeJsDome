import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getToken } from "ve-framework/utils/auth";
export default {
  data() {
    return {
      wsURL: this.$config.baseURL + '/ws',
      wsTopic: '/user/topic/m1/command/video/histories',
      wsCommand: '/taxi-websocket/taxim/ws',
      ws: null,
      subscriber: null,
      headers: {}
    };
  },
  methods: {
    subscribe() {
      if (this.ws && this.ws.connected) {
        if (this.wsTopic) {
          this.subscriber = this.ws.subscribe(this.wsTopic, this.onmessage);
          if (typeof this.onWsReady === "function") {
            this.onWsReady(this.ws);
          }
        } else {
          console.error("请设置wsTopic");
        }
      }
    },
    unsubscribe() {
      this.subscriber && this.subscriber.unsubscribe();
    },
    createWebSocket(url) {
      if (!url) {
        return false;
      }
      // 获取STOMP子协议的客户端对象
      Stomp.WebSocketClass = SockJS;
      // this.ws = Stomp.client(url);
      // 框架默认超时时间为 5s。这里设置大些防止连接超时bug
      this.ws = Stomp.over(() => new SockJS(url, null, { timeout: 30000 }));
      this.ws.heartbeat.outgoing = 5000;   // if 5000 means client will send heart beat every 5000ms
      this.ws.heartbeat.incoming = 5000;   // if 0 means client does not want to receive heartbeats from server
      this.ws.debug = (str) => {
        console.warn(str)
      };
      let headers = {};
      // 定义客户端的认证信息,按需求配置
      const tokenString = getToken();
      if (tokenString) {
        const tokenJson = JSON.parse(tokenString);
        if (tokenJson) {
          headers.Authorization = "Bearer " + tokenJson.accessToken;
        }
      }
      this.headers = headers;
      this.ws.connect(
        headers,
        () => {
          this.subscribe();
        },
        err => {
          debugger
          // 连接发生错误时的处理函数
          console.log(err);
          // 5秒后重连
          // !this.ws.connected && this.delay(5000).then(() => {
          //   this.createWebSocket(url);
          // });
        }
      );
    },
    onmessage(resp) {
      // console.log(resp)
      let { body, command } = resp
      if (body) {
        const data = JSON.parse(body);
        if (data) {
          console.log(data)
          if (command) {
            if (data.command && typeof this[data.command] === "function") {
              this[data.command](data);
            } else {
              this.$bus.$emit(command, data);
            }
          }
        }
      }
    },
    send(data, topic = "/app/command") {
      if (this.ws && this.ws.connected) {
        this.ws.send(this.wsCommand || topic, {}, data);
      }
    },
    closeWebsocket(destroyed) {
      if (this.ws) {
        this.unsubscribe();
        if (destroyed) {
          // 强制关闭 websocket
          this.ws.forceDisconnect();
          this.ws = null;
        }
      }
    },
    created(init) {
      if (typeof this.ifOpen === "function" && !this.ifOpen()) {
        return;
      }
      if (init) {
        const url = this.wsURL;
        if (url) {
          this.createWebSocket(url);
        } else {
          console.error("请设置wsURL");
        }
      } else if (this.ws) {
        this.subscribe();
      }
    }
  },
  created() {
    this.created(true);
  },
  activated() {
    this.created();
  },
  deactivated() {
    this.closeWebsocket();
  },
  destroyed() {
    this.closeWebsocket(true);
  }
};
