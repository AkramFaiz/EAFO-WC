var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var mongojs = require("mongojs");
var db = mongojs('EAFO',['user','iOS','and','web','hyb']);
//var db = mongojs('mongodb://eafo-admin:5tgb^YHN@ds129394.mlab.com:29394/eafo',['user','iOS','and','web','hyb']);
var multer = require('multer');
var fs = require('fs');

var storage = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'/Users/akramfaiz/Documents/work/EAFO-WC/src/assets');
	},
	filename: function(req,file,cb){
		cb(null, file.originalname+ '-' + Date.now()+'.jpg')
	}
});
var upload = multer({ storage: storage }).single('file');

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
//  user
router.get('/user',(req, res, next) => {
         db.user.find(function (err, docs) {
             console.log(docs);
             res.json(docs);
         });
 })
router.post('/user',(req, res, next) => {
    var newObj = req.body;
    
    db.user.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
// user end

 /* iOS */
 router.get('/iOS',(req, res, next) => {
    db.iOS.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

// router.post('/iOS',function(req, res, next){
//     upload(req,res,function(err){
//         console.log(res);
//         console.log('---');
//         console.log(req.body);
//         console.log('---');
//         console.log(req.file);
//         console.log('---');
//         console.log(err);
//         if(err){
//             return res.status(501).json({error:err});          
//         }
//         return res.json({originalname:req.file.originalname, uploadname: req.file.filename});
//     });
// });

// router.post('/iOS',upload.single('file'),function(req,res){
//     var newObj = req.body;
//     console.log('---');
//     console.log(req);
//     console.log('---');
//     console.log(req.file);
//     console.log('---');
// 	console.log(req.file.path);
// 	var imgPath = req.file.path.split('/public');
// 	console.log(imgPath);
// 	var records = {		
//         Icon: imgPath[1],
//         Title: newObj.Title,
//         Desc : newObj.Desc,
//         Version : newObj.Version,
//         DevelopedBy : newObj.DevelopedBy,
//         SupportedBy : newObj.SupportedBy,
//         VersionsHistory : newObj.VersionsHistory,
//         CodeRepository : newObj.CodeRepository
// 	}
//     db.iOS.insert(records, function(err, doc) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         res.json(doc);
//       });
// });

router.post('/iOS',(req, res, next) => {
    var newObj = req.body;
    console.log(newObj);
    db.iOS.insert(newObj, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        res.json(doc);
      });
});
router.delete('/iOS/:id',(req, res, next) => {
    var curId = req.params.id;
    db.iOS.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
//edit
router.get('/iOS/:id',function(req,res){
    var curId = req.params.id;
    console.log('iD====',curId);
	db.iOS.findOne({_id: mongojs.ObjectId(curId)},function(err,doc){
		res.json(doc);
	});
});
router.put('/iOS/:id',function(req,res){
    var curId = req.params.id;
    
    db.iOS.findAndModify({query: {_id: mongojs.ObjectId(curId)},update:{$set:
        {   Icon : req.body.Icon,
            Title: req.body.Title,
            Desc: req.body.Desc,
            Version: req.body.Version,
            DevelopedBy: req.body.DevelopedBy,
            SupportedBy: req.body.SupportedBy,
            VersionsHistory: req.body.VersionsHistory,
            CodeRepository: req.body.CodeRepository}},new: true}, function(err,doc){
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
router.delete('/web/:id',(req, res, next) => {
    var curId = req.params.id;
    console.log('iD====',curId);
    db.web.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
//edit
router.get('/web/:id',function(req,res){
    var curId = req.params.id;
    console.log('iD====',curId);
	db.web.findOne({_id: mongojs.ObjectId(curId)},function(err,doc){
		res.json(doc);
	});
});
router.put('/web/:id',function(req,res){
    var curId = req.params.id;
    db.web.findAndModify({query: {_id: mongojs.ObjectId(curId)},update:{$set:
        {   Icon : req.body.Icon,
            Title: req.body.Title,
            Desc: req.body.Desc,
            Version: req.body.Version,
            DevelopedBy: req.body.DevelopedBy,
            SupportedBy: req.body.SupportedBy,
            VersionsHistory: req.body.VersionsHistory,
            CodeRepository: req.body.CodeRepository}},new: true}, function(err,doc){
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
router.delete('/and/:id',(req, res, next) => {
    var curId = req.params.id;
    console.log('iD====',curId);
    db.and.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
//edit
router.get('/and/:id',function(req,res){
    var curId = req.params.id;
    console.log('iD====',curId);
	db.and.findOne({_id: mongojs.ObjectId(curId)},function(err,doc){
		res.json(doc);
	});
});
router.put('/and/:id',function(req,res){
    var curId = req.params.id;
    db.and.findAndModify({query: {_id: mongojs.ObjectId(curId)},update:{$set:
        {   Icon : req.body.Icon,
            Title: req.body.Title,
            Desc: req.body.Desc,
            Version: req.body.Version,
            DevelopedBy: req.body.DevelopedBy,
            SupportedBy: req.body.SupportedBy,
            VersionsHistory: req.body.VersionsHistory,
            CodeRepository: req.body.CodeRepository}},new: true}, function(err,doc){
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
router.delete('/hyb/:id',(req, res, next) => {
    var curId = req.params.id;
    console.log('iD====',curId);
    db.hyb.remove({_id: mongojs.ObjectId(curId)}, function(err, doc) {
        res.json(doc);
    });
});
//edit
router.get('/hyb/:id',function(req,res){
    var curId = req.params.id;
    console.log('iD====',curId);
	db.hyb.findOne({_id: mongojs.ObjectId(curId)},function(err,doc){
		res.json(doc);
	});
});
router.put('/hyb/:id',function(req,res){
    var curId = req.params.id;
    db.hyb.findAndModify({query: {_id: mongojs.ObjectId(curId)},update:{$set:
        {   Icon : req.body.Icon,
            Title: req.body.Title,
            Desc: req.body.Desc,
            Version: req.body.Version,
            DevelopedBy: req.body.DevelopedBy,
            SupportedBy: req.body.SupportedBy,
            VersionsHistory: req.body.VersionsHistory,
            CodeRepository: req.body.CodeRepository}},new: true}, function(err,doc){
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