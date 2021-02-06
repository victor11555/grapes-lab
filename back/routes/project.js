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
      privaate,
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
        privaate,
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
  await jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) res.json({ success: false, message: 'token expired' });

    try {
      let { id } = decoded;
      let likeObj = {
        userId: id,
        like,
      };
      let project = await Project.findById(projectId);
      project.rating.push(likeObj);
      await project.save();
      let stars = 0;
      project.rating.forEach(el => {
        if(project.rating.indexOf(el) !== 0) stars += el.like;
      });
      stars /= project.rating.length-1;
      project.rating[0].like = stars;
      await project.save()
      res.json({ success: true, project });
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  });
});

router.post('/edit', async (req, res) => {

  const { token, concept, projectName,
    description,
    projectResult,
    technology,
    comparison,
    basis,
    needs,
    targetClient,
    acceptableOutcome,
    additionalNeeds,
    needPrototype,
    privaate,
    projectId
  } = req.body;
  let prototypeText = null;
  if (needPrototype) prototypeText = req.body.prototypeText;
  await jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) {
      res.json({ success: false, message: 'token expired' });
    } else {
      try {
        let projectFromDB = await Project.findOneAndUpdate({ _id: projectId }, {
          concept, projectName,
          description,
          projectResult,
          technology,
          comparison,
          basis,
          needs,
          targetClient,
          acceptableOutcome,
          additionalNeeds,
          needPrototype,
          prototypeText,
          privaate,
        });
        if (projectFromDB) {
          res.json({ success: true, project: projectFromDB });
        } else {
          res.json({ success: false, message: 'no such user' });
        }
      } catch (err) {
        res.json({ success: false, message: err.message });
      }
    }
  });

});

router.post('/delete', async (req, res) => {
  const { token, projectId } = req.body;
  await jwt.verify(token, tokenKey, async (err, decoded) => {
    if (err) {
      res.json({ success: false, message: 'token expired' });
    } else {
      try {
        await Project.findOneAndDelete({ _id: projectId });
        let { id } = decoded;
        const user = await User.findOne({_id: id})
        user.projects.filter(el=> el !== projectId);
        await user.save()
        res.json({success: true, projectId});
      } catch (err) {
        res.json({ success: false, message: err.message });
      }
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
