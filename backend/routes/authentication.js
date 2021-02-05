const express = require('express');
const router = express.Router();
const { login, register } = require('../functions')

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect('/')
})

router.post('/login', login)
router.post('/register', register)

module.exports = router