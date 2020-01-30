let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index')
/* GET Home page. */
router.get('/', indexController.Home);

/* GET About page. */
router.get('/about', indexController.About);

/* GET Project page. */
router.get('/projects', indexController.Projects);

/* GET Services page. */
router.get('/services', indexController.Services); 

/* GET Contact page. */
router.get('/contact', indexController.Contact);

module.exports = router;
