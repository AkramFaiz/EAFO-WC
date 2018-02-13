var express = require('express');
var _bp = require('body-parser');
var _path = require('path');
var _http = require('http');
var app = express();
var cors = require('cors');
//var MongoClient = require('mongodb').MongoClient;
//var ObjectID = require('mongodb').ObjectID;
//var dbConn = "mongodb://localhost:27017/";

var api = require('./server/api');
app.use(_bp.json());
app.use(_bp.urlencoded({extended: false}));

app.use(express.static(_path.join(__dirname,'dist')));

app.use('/',api);

/*
app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });
*/

app.use(cors());

app.get('*'),(req,res) => {
    res.sendFile(_path.join(__dirname,'dist/index.html'));
}

var port = process.env.PORT || '3000';
app.set('port',port);

var server = _http.createServer(app);
server.listen(port, () => console.log("Server is running" ));





// app.get('/user', (req, res) => checkCredentials(res));
// app.get('/iOS', (req, res) => getiOSData(res));
// app.get('/iOS/:id', (req, res) => getiOSDataById(res));

//app.listen(3000, () => console.log('Server Running !!!'));
/*
function checkCredentials(res){
    console.log("GET__",res);
    MongoClient.connect(dbConn, function(err, db) {
        if (err) throw err;
        var dbo = db.db("EAFO");
        //var query = { "username": usrname,"password":pwd };
        dbo.collection("user").find().toArray(function(err, result) {
          if (err) throw err;
          if(result.length!=0){            
            //     res.writeHead(200, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials": "true","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"});
             var json = {status:"success"};
             res.send(JSON.stringify(result));             
          }else{
          //   res.setHea(401, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials": "true","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"});
             var json = {status:"fail"};
             res.send(JSON.stringify(json));             
         }db.close();         
        });
      });
}
function getiOSData(res){
    MongoClient.connect(dbConn, function(err, db) {
        if (err) throw err;
        var dbo = db.db("EAFO");
        //var query = { "username": usrname,"password":pwd };
        dbo.collection("iOS").find().toArray(function(err, result) {
          if (err) throw err;
          if(result.length!=0){            
            //     res.writeHead(200, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials": "true","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"});
             var json = {status:"success"};
             res.send(JSON.stringify(result));             
          }else{
          //   res.setHea(401, {'Content-Type': 'text/html',"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials": "true","Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"});
             var json = {status:"fail"};
             res.send(JSON.stringify(json));             
         }db.close();         
        });
      });
}
*/
// function getiOSDataById(res){
//     MongoClient.connect(dbConn, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("EAFO");
//         //var query = { "username": usrname,"password":pwd };
//         dbo.collection("iOS").({_id:mo

//         })       
//       });
// }