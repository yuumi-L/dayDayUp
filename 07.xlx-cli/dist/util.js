'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.downloadUrl = downloadUrl;

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function help() {
  console.log('这是帮助方法，欢迎使用本脚手架，么么哒');
}

function downloadUrl(url, projectName) {
  return new Promise((resolve, reject) => {
    //使用 http从github上下载master分支  直接使用用户名加上仓库名 例如 'hongl0409/htmlANDcss'
    (0, _downloadGitRepo2.default)(url, projectName, err => {
      if (err) {
        console.log('===========================');
        // reject(err)
      } else {
        resolve();
      }
    });
  });
}