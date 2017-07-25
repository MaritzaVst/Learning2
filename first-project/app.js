var express = require('express'),
    app = express (),
    path = require('path');

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/node_modules`))

app.get('/', function(req, res){
    //res.send('Hello Word');
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(3001, function(){
    console.log("Ready")
});
