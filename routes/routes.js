const express = require('express');
const router = express.Router();
const formValidate =  require('../views/validate');

router.get("/", (req, res) => {
    res.render('index', {
        pagename: 'Home',
    });
});

router.get("/about", (req, res) => {
    res.render('about', {
        pagename: 'About',
    });
});

router.get("/projects", (req, res) => {
    res.render('projects', {
        pagename: 'Projects',
    });
});

router.get("/contact", (req, res) => {
    res.render('contact', {
        pagename: 'Contact',
    });
});

router.get("/register", (req, res) => {
    res.render('register', {
        pagename: 'Sign Up',
    });
});

router.post("/registration", formValidate);

module.exports = router;