var express = require('express');
var router = express.Router();
var PREFIX = "jonep-bp";

/* GET Boilerplate home page. */
router.get('/', function(req, res, next) {
    res.render(PREFIX + '/index', { title: 'Boilerplate'});
});

/* GET site-styles page. */
router.get('/site-styles', function(req, res, next) {
    res.render(PREFIX + '/site-style/index', { title: 'Site Styles'});
});

/* GET BP Typography */
router.get('/site-styles/typography', function(req, res, next) {
    res.render(PREFIX + '/site-style/typography/index', { title: 'Typography'});
});

/* GET BP Box */
router.get('/site-styles/box', function(req, res, next) {
    res.render(PREFIX + '/site-style/box/index', { title: 'Box'});
});

/* GET BP Button */
router.get('/site-styles/button', function(req, res, next) {
    res.render(PREFIX + '/site-style/button/index', { title: 'Buttons'});
});

/* GET modules page. */
router.get('/modules', function(req, res, next) {
    res.render(PREFIX + '/modules/index', { title: 'Modules'});
});

/* GET BP Carousel */
router.get('/modules/carousel', function(req, res, next) {
    res.render(PREFIX + '/modules/carousel/index', { title: 'Carousel'});
});

/* GET BP Carousel */
router.get('/modules/news', function(req, res, next) {
    res.render(PREFIX + '/modules/news/index', { title: 'News'});
});

/* GET page-layout page. */
router.get('/page-templates', function(req, res, next) {
    res.render(PREFIX + '/page-templates/index', { title: 'Layout'});
});

/* GET page-layout page. */
router.get('/page-templates/home-page', function(req, res, next) {
    res.render(PREFIX + '/page-templates/home-page/index', { title: 'Home Page Layout'});
});

/* GET page-layout page. */
router.get('/page-templates/gallery-page', function(req, res, next) {
    res.render(PREFIX + '/page-templates/gallery-page/index', { title: 'Gallery Layout'});
});

/* GET page-layout page. */
router.get('/page-templates/product-page', function(req, res, next) {
    res.render(PREFIX + '/page-templates/product-page/index', { title: 'Product Layout'});
});

/* GET page-layout page. */
router.get('/page-templates/misc-page', function(req, res, next) {
    res.render(PREFIX + '/page-templates/misc-page/index', { title: 'Misc Layout'});
});
module.exports = router;