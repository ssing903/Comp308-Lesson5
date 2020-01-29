let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contactModel = require('../models/contact')

/* GET Contact List  */
router.get('/', (req,res,next) => {
    contactModel.find((err,contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(contactList);
            res.render('contacts/index',{
                title:'Contact List',
                contactList : contactList
            });
        }
    });
});

/* GET Route for ADD page
    this will display Add Page */
router.get('/add',(req,res,next) => {
    res.render('contacts/add',{
        'title' : 'Add New Contact'
    });
});

/* POST Route for processing the Add Page */
router.post('/add',(req,res,next) => {
    let newContact = contactModel({
        "FirstName" : req.body.FirstName,
        "LastName" : req.body.LastName,
        "Age" : req.body.Age
    });
    
    contactModel.create(newContact,(err,contactModel) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            // refresh Contact List
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;