var path = require("path")
// 从左往右cd
console.log(path.resolve('/foo/bar', './baz'));
console.log(path.resolve('/foo/bar', './tmp/file/'));
path.isAbsolute(path)
// 判断参数 path 是否是绝对路径。