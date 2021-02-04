const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

const Project = require('../models/project');

router.post('/', async (req, res, next) => {
  const { token } = req.body;
  let data = jwt.verify(token, tokenKey, (err, decoded) => {
    if (err) res.json({ success: false, message: 'token expired' });
    return decoded;
  });
  const { id } = data;
  let user = await User.findOne({ _id: id });
  const {
    status,
    concept,
    projectResult,
    technology,
    comparison,
    basis,
    needs,
    targetClient,
    acceptableOutcome,
    needPrototype,
    additionalNeeds,
    team,
  } = req.body;
  try {
    let prototypeText = null;
    if (needPrototype) prototypeText = req.body.prototypeText;
    const project = new Project({
      author: user._id,
      status,
      concept,
      projectResult,
      technology,
      comparison,
      basis,
      needs,
      targetClient,
      acceptableOutcome,
      needPrototype,
      prototypeText,
      additionalNeeds,
      team,
    });
    await project.save();
    user.projects.push(project._id);
    await user.save();
    res.json({ success: true, project });
  } catch (err){
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
