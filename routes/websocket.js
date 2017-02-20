var sse = require('connect-sse')();
var express = require('express');
var moment = require('moment');
var Mariadb = require('mariasql');


var router = express.Router();

/* GET home page. */
// router.ws('/', function(ws, req) {
//     //res.render('index', { title: 'Express' });
//     ws.on('message', function(msg) {
//         ws.send(msg);
//         console.log(msg);
//     });
// });

router.get('/events', sse, function(req, res) {
    var db = new Mariadb({
        host: '10.0.0.241',
        user: 'admin',
        password: '123456',
        db: 'mariadb',
        charset: 'utf8'
    });
    var sql = "select date_format(time,'%H:%m:%s') as timestamp,value from maria where address=65 and sn=1 and date_sub(now(), interval 1 minute) < time ";



    //var data = [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()];
    setInterval(function() {
        //data.shift();
        //data.push(getRandom());
        db.query(sql, function(err, rows) {
            //console.log(rows);
            var labels=[];
            var data=[];
            for(var row of rows){
                labels.push(row.timestamp);
                data.push(parseInt(row.value));
            }

        res.json({
                labels: labels,
                datasets: [{
                    //fillColor: "rgba(220,220,220,0.5)",
                    fillColor: 'rgba(255,255,255,0.5)',
                    strokeColor: "rgba(0,0,0,1)",
                    pointColor: "rgba(0,0,0,1)",
                    pointStrokeColor: "#fff",
                    data: data
                }]
            },
            'example');
        });

    }, 2000);
});

// function getRandom() {
//     return Math.floor(Math.random() * 20) + 80;
// }



// var app = express()
// app.get('/events', sse, function(req, res) {
//     res.json("this is an event");
//     res.json({ here: "is", another: "event" });
//     res.json({ here: "is a named event", to: "listen with addEventListener('example', function(){})" }, "example");
// });

module.exports = router;