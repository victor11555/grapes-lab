const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');

const saltRounds = 12;
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

router.post('/', async (req, res) => {
  const { token } = req.body;
   jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) {
      res.json({ success: false, message: 'token expired' });
    } else {
      try {
        const { id } = decoded;
        let userFromDB = await User.findOne({ _id: id }).populate('projects');
        let { name, email, phone, company, role, projects } = userFromDB;
        if (userFromDB) {
          res.json({ success: true, user: { name, email, phone, company, role, projects } });
        } else {
          res.json({ success: false, message: 'no such user' });
        }
      } catch (err) {
        res.json({ success: false, message: err.message });
      }
    }
  });
});

router.post('/login', async (req, res, next) => {
  const {
    email, password,
  } = req.body;
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    let token = await jwt.sign({ id: user._id }, tokenKey, { expiresIn: 60 * 600 });
    res.json({ success: true, token });
  } else if (user) {
    res.json({ success: false, message: 'wrong password' });
  } else {
    res.json({ success: false, message: 'wrong password' });
  }
});

router.post('/signup', async (req, res, next) => {
  const secretKey = 'someTestTextHere';
  const {
    name, email, password, phone, company, role, secret,
  } = req.body;
  if (await User.findOne({ email })) {
    res.json({ success: false, message: 'Such user already exists' });
  }
  try {
    if (role !== 'User') {
      if (secret && secret !== secretKey) {
        res.json({ success: false, message: 'Wrong Secret Key' });
      } else {
        let user = await new User({
          name,
          email,
          password: await bcrypt.hash(password, saltRounds),
          phone,
          role,
          company,
        });
        await user.save();
        let token = jwt.sign({ id: user._id }, tokenKey, { expiresIn: 60 * 600 });
        res.json({ success: true, token }).status(200);
      }
    } else {

      let user = await new User({
        name,
        email,
        password: await bcrypt.hash(password, saltRounds),
        phone,
        company,
      });
      await user.save();
      let token = jwt.sign({ id: user._id }, tokenKey, { expiresIn: 60 * 600 });
      res.json({ success: true, token }).status(200);
    }
  }
  catch (err){
    res.json({success:false,message:err.message})
  }
});

module.exports = router;
