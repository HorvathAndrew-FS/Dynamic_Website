const express = require('express');
const router = express.Router();
const formValidation =  require('../views/validate');

const validate = () => {
    return (req, res, next) => {
        if(res.errors != undefined) {
            console.log('validate');
        res.send(formValidation(req.body));
        } else {
            res.render('form-view', { 
                errors: errors
            });
        }
    }
};

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

router.post("/registration", validate, (res, req, next) => {
    console.log('you submitted');
});



module.exports = router;