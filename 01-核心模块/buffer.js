// const buf = Buffer.from('你好');
// console.log(buf.toString(),'bufferrrr');
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//   return value && value.type === 'Buffer' ?
//     Buffer.from(value.data) :
//     value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);
// var buffer1 = Buffer.from('BA2BC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }
// 拷贝缓冲区
// 语法
// Node 缓冲区拷贝语法如下所示：

// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// 参数
// 参数描述如下：

// targetBuffer - 要拷贝的 Buffer 对象。

// targetStart - 数字, 可选, 默认: 0

// sourceStart - 数字, 可选, 默认: 0

// sourceEnd - 数字, 可选, 默认: buffer.length

// 返回值
// 没有返回值。

// // 实例
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');

// //将 buf2 插入到 buf1 指定位置上
// buf2.copy(buf1, 2);

// console.log(buf1.toString());
// var fs = require("fs");
// var data = '菜鸟教程官网地址：www.runoob.com';

