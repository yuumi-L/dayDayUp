const http = require('http')
const path = require('path')
const fse = require("fs-extra");
const multiparty = require("multiparty");

const serve = http.createServer()
// 设置文件存储位置
const UPLOAD_DIR = path.resolve(__dirname, 'static')

serve.on("request", async (req, res) => {
  console.log(Math.random())
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }


  const multipart = new multiparty.Form()
  multipart.parse(req, async (err, fields, files) => {
    if (err) {
      return
    }
    const [chunk] = files.chunk
    const [hash] = fields.hash
    const [filename] = fields.filename
    console.log(filename)
    const chunkDir = path.resolve(UPLOAD_DIR, filename)
    // 
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }
    console.log(chunk)
    await fse.move(chunk.path, `${chunkDir}/${hash}`)
    res.end('成功')

  })
})

serve.listen(3000, () => {
  console.log('正在监听3000端口')
})

