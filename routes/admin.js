var express = require('express');
var router = express.Router();

/* 系统管理模块 */

// ----------------------------------------------------------
// 部门管理 
// ----------------------------------------------------------

/* 部门列表 */
router.get('/departments', function(req, res, next) {
    res.render('admin/departments/index', { title: 'Express', message: 'aaaa' });
    //res.end();
});

/* 部门修改 */
router.post('/departments/create', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

// ----------------------------------------------------------
// 部门负责人 
// ----------------------------------------------------------
router.get('/managers', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('admin/managers/index');
});

router.post('/managers/create', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.get('/managers/:id', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.get('/managers/:id/edit', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

router.get('/managers/:id/update', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.end();
});

// router.get('/managers/:id/delete', function(req, res, next) {
//     //res.render('index', { title: 'Express' });
//     res.end();
// });


module.exports = router;