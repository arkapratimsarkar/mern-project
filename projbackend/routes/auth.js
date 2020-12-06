const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {signup, signin, signout, isSignedIn} = require('../controllers/auth');

router.post("/signup",[
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail().normalizeEmail(),
    check("password", "pass should be 3 char").isLength({min: 3}),
], 
signup
);

router.post("/signin",[
    check("email", "email is required").isEmail().normalizeEmail(),
    check("password", "password is required").isLength({min: 3}),
], 
signin
);




router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.send("A protected route")
});

module.exports = router;