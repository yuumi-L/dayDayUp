'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('运行成功==================');


let actionMap = {
  init: {
    description: 'generate a new project from a template',
    usage: ['hl init templateName projectName'],
    alias: 'inita'
  }
};
Object.keys(actionMap).forEach(action => {
  _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    switch (action) {
      case 'init':
        (0, _index2.default)(action, ...process.argv.slice(3));
        break;

      default:
        console.log('暂时还没有这个指令');
        break;
    }
  });
});

// program.command('init') // 命令名称
//   .description('创建一个新的项目来自一个模板文件') // 命令描述
//   .alias('initialization') // 命令别名 
//   .action(() => {   // 命令具体干的事
//     console.log(...process.avgv.slice(3))
//   })

// program.usage('<command> [options]')


if (_commander2.default.all) {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
}

_commander2.default.on('-h', util.help);
_commander2.default.on('--help', util.help);

_commander2.default.version('0.0.1')
// .option('-a, --all', '这是说明')
.parse(process.argv);