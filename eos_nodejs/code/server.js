var express = require('express')
var cors = require('cors')
const shell = require('shelljs')

var app = express();
app.use(cors())


app.get('/', function (req, res) {
  // let cmd = 'ls'
  let eos_cmd = 'cleos wallet list'
  let cmd = 'screen -S kulap -X stuff "' + eos_cmd + ' ^M"'
  shell.exec( cmd )
  res.send('Hello World2');
})


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
