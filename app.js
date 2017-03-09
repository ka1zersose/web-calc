var express = require('express');
var app = express();
var calc = require('./lib/calc');

app.get('/', function(req, res){
    if (req.query.a && req.query.b && req.query.operation){
        calc[req.query.operation](req.query.a, req.query.b, (err, result)=>{
            if (err){
                res.send(err.message);
                return;
            }
            res.send({result:result});
        });
    }else{
        res.send('supply a and b');
    }
});

app.listen(process.env.port || 3000);

