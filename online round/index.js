const express = require('express')
var cookie=require('set-cookie');
var cookieParser = require('cookie-parser');
const app = express()
app.use(cookieParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));



//TASK 3
app.get('/', function(req, res){
   var ck = req.cookies.flag;
   console.log(cookie)
   if(ck == undefined) {
     var val = 'flag{c_u_onsite}'
     res.cookie('flag','flag{c_u_onsite}');
     res.sendFile('index.html',{"root": __dirname});
   }
   else {
     res.sendFile('index.html',{"root": __dirname});
   }
 });
 


//TASK 5
app.get('*', function(req, res){
  var ck = req.cookies.flag;
   console.log(cookie)
   if(ck == undefined) {
     res.cookie('flag{c_u_onsite}');
     res.status(403).end('\nToo smart eh??\n\nSorry, you are forbidden to see this page');   }
   else {
    // res.sendFile('index.html',{"root": __dirname});
     res.status(403).end('\nToo smart eh??\n\nSorry, you are forbidden to see this page');
   }
    
 });



app.listen(8080, () => console.log('App listening on port 8080!'))