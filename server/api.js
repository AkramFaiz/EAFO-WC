var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) =>{
   return MongoClient.connect('mongodb://localhost:27017/EAFO',(err,db)=>{
       if(err){return console.log('Error !!!');}
        closure(db);
   })
};

let response = {
    sts : 200,
    msg : null,
    data:[]
};

var sendErr = (err,res)=>{
    response.status = 501;
    response.message = typeof err == "object"  ? err.message : err;
    res.status(501).json(response);
}

router.get('/user',(req, res) => {
    connection((db) => {
        db.collection('user').find().toArray().then((user)=>{
            response.data = user;
            res.json(response);
            if(err){
                res.send(err);
            }
        })
        .catch((err)=>{
            sendError(err,res);
        });
        // db.iOS.find(function(err,docs){
        //     console.log("asdasd");
        //     res.json(docs);
        // });
    })
})

module.exports = router;