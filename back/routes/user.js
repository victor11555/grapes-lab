const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const tokenKey = '1a2b-3c4d-5e6f-7g8h';
const saltRounds = 12;
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/', async (req, res, next) => {
    let users = await User.find();
    // users = [...users.sort((a, b)=>a.points - b.points)]
    res.json({success: true, users});
});

router.post('/edit', async (req, res, next) => {
    const { token, name, email, phone, company, password } = req.body;
    jwt.verify(token, tokenKey, async (err, decoded) => {
        if (err) {
            res.json({ success: false, message: 'token expired' });
        } else {
            try {
                const { id } = decoded;
                let userFromDB = await User.findOneAndUpdate({ _id: id },{name, email, phone, company, password: await bcrypt.hash(password, saltRounds),}).populate('projects');
                if (userFromDB) {
                    res.json({ success: true, user: { name, email, phone, company } });
                } else {
                    res.json({ success: false, message: 'no such user' });
                }
            } catch (err) {
                res.json({ success: false, message: err.message });
            }
        }
    });
});


module.exports = router;
