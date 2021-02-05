const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const tokenKey = '1a2b-3c4d-5e6f-7g8h';
const User = require('../models/user');
const Project = require('../models/project');

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json({ success: true, projects });
});

router.post('/', async (req, res, next) => {
  const { token } = req.body;
  console.log(token);
  await jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) res.json({ success: false, message: 'token expired' });
    const { id } = decoded;
    let user = await User.findOne({ _id: id });
    const {
      status,
      concept,
      projectName,
      projectResult,
      description,
      technology,
      comparison,
      basis,
      needs,
      targetClient,
      acceptableOutcome,
      needPrototype,
      additionalNeeds,
      private,
    } = req.body;
    try {
      let prototypeText = null;
      if (needPrototype) prototypeText = req.body.prototypeText;
      const project = new Project({
        author: user._id,
        status,
        concept,
        projectName,
        projectResult,
        description,
        technology,
        comparison,
        basis,
        needs,
        targetClient,
        acceptableOutcome,
        needPrototype,
        prototypeText,
        additionalNeeds,
        private,
      });
      await project.save();
      user.projects.push(project._id);
      await user.save();
      res.json({ success: true, project });
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  });
});

router.post('/like', async (req, res) => {
  const { token, like, projectId } = req.body;
  console.log(token);
  await jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) res.json({ success: false, message: 'token expired' });

    try {
      let { id } = decoded;
      let likeObj = {
        userId: id,
        like,
      };
      let project = await Project.findById(projectId);
      projectId.rating.push(likeObj);
      await project.save();
      let stars;
      project.rating.forEach(el => {
        stars += el.like;
      });
      stars = stars / project.rating.length;
      res.json({ success: true, stars });
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  });
});

router.get('/all', async (req, res) => {
  try {
    let allProjects = await Project.find().populate('author comments team');
    res.json({ success: true, allProjects });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
