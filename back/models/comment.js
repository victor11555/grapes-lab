const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author:{type: mongoose.Schema.Types.ObjectId,ref:'Project',required:true},
  text:String,
  projects: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

module.exports = mongoose.model('Comment', commentSchema);
