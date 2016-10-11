var express =require('express');
var app = express();
var PORT = 3000;

var middleWare = require('./middleWare.js')

app.use(middleWare.logger);


app.get('/about', middleWare.requireAuthentication, function(req, res){
    res.send('about us!!');
});

app.use(express.static(__dirname + '/public'));



app.listen(PORT, function(){
    console.log('express started and running on port:  '+PORT+ '!');
});