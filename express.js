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

app.post("/delete",function(req,res){
    var id = req.param('id');
    var sql = 'UPDATE FROM MinecraftDB.items SET amount = amount - 1 WHERE id=' + id + ';';
    result = db.query(sql);
    result.then(function(rows){
        console.log(rows);
        res.send(rows);
    });
});

app.post("/click", function(req, res){
    var id = req.param('id');
    var sql = 'UPDATE MinecraftDB.items SET amount = amount + 1 WHERE itemID =' + id + ";";
    result = db.query(sql);
    result.then(function(rows){
        console.log(rows);
        res.send(rows);
    });
});

app.listen(port);
