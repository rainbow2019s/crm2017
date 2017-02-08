var express = require('express');
var router = express.Router();

/* 系统管理模块 */

router.get('/staffs', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.post('/staffs/create', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.get('/staffs/:id', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});


router.get('/staffs/:id/edit', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});


router.post('/staffs/:id/update', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});


router.post('/staffs/:id/delete', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});


//????????????
// ----------------------------------------------------------
// 竟见管理 
// ----------------------------------------------------------

/* 意见列表 */
router.get('/opinons', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

/* 竟见修改 */
router.post('/opinons/create', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

// ----------------------------------------------------------
// 部门费用列表 
// ----------------------------------------------------------
router.get('/audits', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.get('/audits/:id/update', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

// router.get('/managers/:id/delete', function(req, res, next) {
//     //res.render('index', { title: 'Express' });
//     res.end();
// });


module.exports = router;