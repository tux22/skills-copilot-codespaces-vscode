// Create web server

var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.send('Comments home page');
});

// GET comment page.
router.get('/comment', function(req, res) {
  res.send('Comment page');
});

// GET comment page.
router.get('/comment/delete', function(req, res) {
  res.send('Delete comment page');
});

// GET comment page.
router.get('/comment/edit', function(req, res) {
  res.send('Edit comment page');
});

// GET comment page.
router.get('/comment/new', function(req, res) {
  res.send('New comment page');
});

module.exports = router;