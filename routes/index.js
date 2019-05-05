const router = require('express').Router();
const path = require('path');
const controller = require('../controller/controller');


router.route('/get')
        .get(controller.get_articles)


module.exports = router;