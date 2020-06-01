'use strict';

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 初始化项目
 * xlx init templateName projectName
 * templateName 模板名称:通过使用download-git-repo 下载git服务器的项目
 * projectName 项目名称
 */
let init = function (templateUrl, projectName) {
  //命令行交互
  _inquirer2.default.prompt([{
    name: 'description',
    message: 'Please enter the project description: '
  }, {
    name: 'author',
    message: 'Please enter the author name: '
  }]).then(answer => {
    console.log('您输入的信息为：', answer);
    let loading = (0, _ora2.default)('downloading template ...');
    loading.start();
    util.downloadUrl(templateUrl, projectName).then(() => {
      loading.succeed('downloading template succeed');
      const fileName = `${projectName}/package.json`;
      if (_fs2.default.existsSync(fileName)) {
        const data = _fs2.default.readFileSync(fileName).toString();
        let json = JSON.parse(data);
        json.name = projectName;
        json.author = answer.author;
        json.description = answer.description;
        //修改项目文件夹中 package.json 文件
        _fs2.default.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
        console.log(_logSymbols2.default.success, _chalk2.default.green('Project initialization finished!'));
      }
    }, err => {
      loading.fail('downloading template fail');
      console.log(err);
    });
  });
};
module.exports = init;