var express = require('express');
var router = express.Router();
var PREFIX = "jonep";

/* GET Jewels of Nepal home page. */
router.get('/', function(req, res, next) {
    res.render(PREFIX + '/index', { title: 'Jewel of Nepal'});
});

/* GET Jewels of Nepal gallery page. */
router.get('/gallery', function(req, res, next) {
    res.render(PREFIX + '/gallery/index', { title: 'Gallery'});
});

/* GET Jewels of Nepal about-us page. */
router.get('/about-us', function(req, res, next) {
    res.render(PREFIX + '/about-us/index', { title: 'About Us'});
});

/* GET Jewels of Nepal contact-us page. */
router.get('/contact-us', function(req, res, next) {
    res.render(PREFIX + '/contact-us/index', { title: 'Contact Us'});
});


module.exports = router;