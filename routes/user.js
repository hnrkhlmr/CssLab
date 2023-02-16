const express = require('express')
const router = express.Router()

//user route
router.get('/login', (req, res) => {
    res.render('user/login')
})

//user profile
router.get('/profile', (req, res) => {
    res.render('user/profile')
})

module.exports = router