const express = require('express');
const router = express.Router();

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
        pagename: 'Sign Up',
    });
});

module.exports = router;