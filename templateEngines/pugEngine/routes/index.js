var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pug' });
});

router.get('/attributes', function(req, res, next) {
  res.render('pages/attributes');
});

router.get('/case', function(req, res, next) {
  res.render('pages/case');
});

router.get('/code', function(req, res, next) {
  res.render('pages/code');
});

router.get('/comments', function(req, res, next) {
  res.render('pages/comments');
});

router.get('/conditionals', function(req, res, next) {
  res.render('pages/conditionals');
});

router.get('/doctype', function(req, res, next) {
  res.render('pages/doctype');
});

router.get('/filters', function(req, res, next) {
  res.render('pages/filters');
});

router.get('/includes', function(req, res, next) {
  res.render('pages/includes');
});

router.get('/inheritance', function(req, res, next) {
  res.render('pages/inheritance');
});

router.get('/interpolation', function(req, res, next) {
  res.render('pages/interpolation');
});

router.get('/iteration', function(req, res, next) {
  res.render('pages/iteration');
});

router.get('/mixins', function(req, res, next) {
  res.render('pages/mixins');
});

router.get('/plaintext', function(req, res, next) {
  res.render('pages/plainText');
});

router.get('/tags', function(req, res, next) {
  res.render('pages/tags');
});


module.exports = router;
