var http = require('http');

http.createServer(function (request, response) {
    console.log('请求我的客户端的地址是：', getClientIP(request))
    response.setHeader("Access-Control-Allow-Origin","127.0.0.1");
	//允许访问字符段 
	response.setHeader("Access-Control-Expose-Headers",'Connection');
	//设置自定义字符段
	response.setHeader("Content-Type",'application/x-www-form-urlencoded');
	response.setHeader("kuazhu-com","kuazhu-content");
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('发送请求')
    // 发送响应数据 "Hello World"
    response.end('Hello World');
}).listen(8888);
function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');