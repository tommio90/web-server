var express =require('express');
var app = express();
var PORT = 3000;

var middleWare = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next){
        console.log('Request : '+ req.method + ' '+ new Date().toString() +' '+ req.originalUrl);
        next();
    }
};

app.use(middleWare.logger);
//app.use(middleWare.requireAuthentication);

app.get('/about', middleWare.requireAuthentication, function(req, res){
    res.send('about us!!');
});

app.use(express.static(__dirname + '/public'));



app.listen(PORT, function(){
    console.log('express started and running on port:  '+PORT+ '!');
});