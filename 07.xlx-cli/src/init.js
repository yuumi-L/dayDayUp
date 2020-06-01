/**
 * 初始化项目
 * xlx init templateName projectName
 * templateName 模板名称:通过使用download-git-repo 下载git服务器的项目
 * projectName 项目名称
 */
import * as util from './util'
import inquirer from 'inquirer'
import ora from 'ora';
import fs from 'fs';
import chalk from 'chalk';
import symbol from 'log-symbols';

let init = function (templateUrl, projectName) {
  //命令行交互
  inquirer.prompt([
    {
      name: 'description',
      message: 'Please enter the project description: '
    },
    {
      name: 'author',
      message: 'Please enter the author name: '
    }
  ]).then(answer => {
    console.log('您输入的信息为：', answer)
    let loading = ora('downloading template ...');
    loading.start();
    util.downloadUrl(templateUrl, projectName).then(() => {
      loading.succeed('downloading template succeed')
      const fileName = `${projectName}/package.json`;
      if (fs.existsSync(fileName)) {
        const data = fs.readFileSync(fileName).toString();
        let json = JSON.parse(data);
        json.name = projectName;
        json.author = answer.author;
        json.description = answer.description;
        //修改项目文件夹中 package.json 文件
        fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
        console.log(symbol.success, chalk.green('Project initialization finished!'));
      }
    }, err => {
      loading.fail('downloading template fail')
      console.log(err)
    })
  })
}
module.exports = init