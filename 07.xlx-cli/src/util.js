import download from 'download-git-repo'

export function help() {
  console.log('这是帮助方法，欢迎使用本脚手架，么么哒')
}

export function downloadUrl(url, projectName) {
  return new Promise((resolve, reject) => {
    //使用 http从github上下载master分支  直接使用用户名加上仓库名 例如 'hongl0409/htmlANDcss'
    download(url, projectName, err => {
      if (err) {
        console.log('===========================')
        // reject(err)
      } else {
        resolve()
      }
    })
  })
}

