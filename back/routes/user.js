const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

const User = require('../models/user');

router.post('/', async (req, res, next) => {
    let users = await User.find();
    // users = [...users.sort((a, b)=>a.points - b.points)]
    res.json({success: true, users});
});


module.exports = router;
