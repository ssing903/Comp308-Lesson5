// let express = require('express');
// let router = express.Router();

module.exports.Home = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.About = (req, res, next) => {
    res.render('index', { title: 'About' });
}

module.exports.Projects = (req, res, next) => {
    res.render('index', { title: 'Projects' });
}

module.exports.Services = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

module.exports.Contact = (req, res, next) => {
    res.render('index', { title: 'Contact' });
}