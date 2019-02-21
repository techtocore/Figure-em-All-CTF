const express = require('express')
const app = express()
var request = require("request")
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));


 app.get('/var.js', function(req, res){
    res.status(403).end('\nSorry, you are forbidden to see this page');
 });


app.get('/input', function(req, res){
     res.sendFile('/input.html',{"root": __dirname});
  });

  app.get('/file1', function(req, res){
    var f1=__dirname+'/unknown_question.exe'
    res.download(f1);
 });

 app.get('/file2', function(req, res){
  var f1=__dirname+'/question.exe'
  res.download(f1);
});

 app.get('/akash', function(req, res){
    res.redirect('http://akashravi.tk/');
 });


 app.get('*',function (req, res) {
   // res.redirect('/');
   res.send('Too smart eh?? Try again')
});


app.listen(8080, () => console.log('App listening on port 8080!'))