const express = require('express');
const router = express.Router();
const formValidation =  require('../views/validate');

const validateForm = () => {
     console.log('validateForm');
    return (req, res, next) => {
        if(req.errors == undefined) {
            console.log('validateForm if');
           req.formValidation();
        } else {
      console.log('validateForm Else');
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

router.post("/registration", validateForm, (res, req, next) => {

});





module.exports = router;