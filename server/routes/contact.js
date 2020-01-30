let express = require('express');
let router = express.Router();

// create a reference to the db schema

let contactController = require("../controllers/contact");
/* GET Contact List  */
router.get('/', contactController.displayContactList); 

/* GET Route for ADD page
    this will display Add Page */
router.get('/add',contactController.displayAddPage);

/* POST Route for processing the Add Page */
router.post('/add',contactController.processAddPage);

/* GET Route for EDIT Page 
    this will display the edit page */
router.get('/edit/:id', contactController.displayEditPage);

/* POST Request - Update the database with data to the database */
router.post('/edit/:id',contactController.processEditPage);

/* GET request for delete */

router.get('/delete/:id',contactController.deleteContact);

module.exports = router;