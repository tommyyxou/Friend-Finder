let express = require('express');
let path = require("path");
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

/* GET survey page. */
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;