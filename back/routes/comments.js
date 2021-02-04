const express = require('express')
const mongoose = require('mongoose')
const Comment = require('../models/comment.js')
const Project = require('../models/project.js')
const User = require('../models/user.js')
const router = express.Router()
const jwt = require('jsonwebtoken')


router.post('/',async (req,res)=>{
  const { token,text,projectID } = req.body;
  let data = jwt.verify(token, tokenKey, (err, decoded) => {
    if (err) res.json({ success: false, message: 'token expired' });
    return decoded;
  });

  const { id } = data;
  let comment = await Comment.create({
    text,
    author:id,
  })
  let project = await Project.findById(projectID)
  project.comments.push(comment)
  await project.save()
  await comment.save()
  res.json({ success :true,comment})

})













module.exports = router