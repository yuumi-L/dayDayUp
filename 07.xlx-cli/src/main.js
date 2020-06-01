console.log('运行成功==================')
import program from 'commander';
import * as util from './util';
import applyFn from './index'
import chalk from 'chalk'

let actionMap = {
  init: {
    description: 'generate a new project from a template',
    usage: [
      'xlxwlw init templateName projectName'
    ],
    alias: 'inita'
  }
}
Object.keys(actionMap).forEach(action => {
  program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      switch (action) {
        case 'init':
          applyFn(action, ...process.argv.slice(3))
          break;

        default:
          console.log('暂时还没有这个指令')
          break;
      }
    })
})

// program.command('init') // 命令名称
//   .description('创建一个新的项目来自一个模板文件') // 命令描述
//   .alias('initialization') // 命令别名 
//   .action(() => {   // 命令具体干的事
//     console.log(...process.avgv.slice(3))
//   })

// program.usage('<command> [options]')


if (program.all) {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa')
}

program.on('-h', util.help);
program.on('--help', util.help);


program
  .version('0.0.1')
  // .option('-a, --all', '这是说明')
  .parse(process.argv);