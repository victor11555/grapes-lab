const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author:{type: mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  text:String,
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

module.exports = mongoose.model('Comment', commentSchema);
