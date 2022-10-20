const express = require('express');
const router = express.Router();
const formValidation =  require('../views/validate');

function validateForm (req, res, next) {
     console.log('validateForm');
        if(req.errors == undefined) {
            console.log('validateForm if');
           formValidation
           next()
        } else {
      console.log('validateForm Else');
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

router.post('/registration', formValidation, (req, res) => {
  console.log('POSTED', req.errors);
  if (req.error) {
    res.render('register', { errors: req.errors, pagename: "register", });
  } else {
    res.render('register', { success: true, pagename: "register", });
  }
});





module.exports = router;