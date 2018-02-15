var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var mongojs = require("mongojs");
var db = mongojs('EAFO',['user','iOS']);
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
router.get('/user',(req, res, next) => {
         db.user.find(function (err, docs) {
             console.log(docs);
             res.json(docs);
         });
 })

 /* iOS */
 router.get('/iOS',(req, res, next) => {
    db.iOS.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});
router.post('/iOS',(req, res, next) => {
    var newObj = req.body;
    db.iOS.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
router.get('/iOS/:id',(req, res, next) => {
    var curId = req.params.id;
    console.log('iD====',curId);
    db.iOS.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
/* iOS end */

/* web */
router.get('/web',(req, res, next) => {
    db.web.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/web',(req, res, next) => {
    var newObj = req.body;
    console.log(newObj);
    db.web.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
router.get('/iOS/:id',(req, res, next) => {
    var curId = req.params.id;
    console.log('iD====',curId);
    db.iOS.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
/* web end */

/* and */
router.get('/and',(req, res, next) => {
    db.and.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/and',(req, res, next) => {
    var newObj = req.body;
    console.log(newObj);
    db.and.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
/* and end */

/* hyb */
router.get('/hyb',(req, res, next) => {
    db.hyb.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
})
router.post('/hyb',(req, res, next) => {
    var newObj = req.body;
    console.log(newObj);
    db.hyb.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
/* hyb end */
module.exports = router;

// const connection = (closure) =>{
//    return MongoClient.connect('mongodb://localhost:27017/EAFO',(err,db)=>{
//        if(err){return console.log('Error !!!');}
//         closure(db);
//    })
// };

// router.get('/user',(req, res , next) => {
//    // connection((db) => {
//         // db.collection('user').find().toArray().then((user)=>{
//         //     response.data = user;
//         //     res.json(response);
//         //     if(err){
//         //         res.send(err);
//         //     }
//         // })
//         // .catch((err)=>{
//         //     sendError(err,res);
//         // });
//         db.user.find(function (err, docs) {
//             console.log(docs);
//             res.json(docs);
//         });
//         // db.iOS.find(function(err,docs){
//         //     console.log("asdasd");
//         //     res.json(docs);
//         // });
//    // })
// })