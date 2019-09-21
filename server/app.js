var express = require('express');											
var fs = require('fs');											
var path = require('path');											
var bodyParser = require('body-parser');	

var app = express();	
// app.use(cookieParase())	// 解析cookie									
app.use(bodyParser.json());											
app.use(bodyParser.urlencoded({ extended: false }));		
// 跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
  next()
})
// 访问静态资源											
app.use(express.static(path.resolve(__dirname, '../dist')));											

app.get('/', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
  res.send(html);
});	

app.post('/login', function (req, res) {
  console.log("req.body > ", req.body)		
  const params = req.body
  if (params.account === '123456') {
    if (params.password === '123456') {
      res.status(200).json({ code: 200, message: '登录成功' }) 
    } else {
      res.status(401).json({ code: 401, message: '密码错误' }) 
    }
  } else {
    res.status(400).send({ code: 400, message: '用户名错误' }) 
  }				
});		

// 监听											
app.listen(3000, function () {											
  console.log('success listen...');											
});											
