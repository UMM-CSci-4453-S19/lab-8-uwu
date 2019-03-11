var express=require('express'),
    mysql=require('mysql'),
    credentials=require('./credentials.json'),
    app = express(),
    port = process.env.PORT || 1337,
    db = require('./database.js');



app.use(express.static(__dirname + '/public'));
app.get("/items",function(req,res){
    var sql = 'SELECT * FROM MinecraftDB.items;';
    result = db.query(sql);
    result.then(function(rows){
        console.log(rows);
        res.send(rows);
    });
});

app.get("/click",function(req,res){
    var id = req.param('id');
    var sql = 'SELECT * FROM MinecraftDB.items WHERE id=' + id + ';';
    console.log("Attempting sql ->"+sql+"<-");

    result = db.query(sql);
    result.then(function(rows){
        console.log(rows);
        res.send(rows);
    });
});

app.listen(port);