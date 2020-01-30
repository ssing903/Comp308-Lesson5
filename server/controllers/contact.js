// let express = require('express');
// let router = express.Router();

// create a reference to the db schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req,res,next) => {
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
}

module.exports.displayAddPage =  (req,res,next) => {
    res.render('contacts/add',{
        'title' : 'Add New Contact'
    });
}

module.exports.processAddPage = (req,res,next) => {
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
}

module.exports.displayEditPage = (req,res,next) => {
    let id = req.params.id;
    contactModel.findById(id,(err,contactObject) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            // show the edit view
            res.render('contacts/edit',{
                'title' : 'Edit Contact',
                contact : contactObject
            });
        }
    });
}

module.exports.processEditPage = (req,res,next) => {
    let id = req.params.id
    let updatedContact = contactModel({
        '_id' : id,
        'FirstName' : req.body.FirstName,
        'LastName' : req.body.LastName,
        'Age' : req.body.Age
    });

    contactModel.update({_id:id},updatedContact,(err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } 
        else {
            res.redirect('/contact-list')
        }
    });

};

module.exports.deleteContact = (req,res,next) => {
    let id = req.params.id;

    contactModel.remove({_id:id},(err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    }); 
};

