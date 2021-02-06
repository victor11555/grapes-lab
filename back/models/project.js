const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  concept: { type: String, required: true },
  projectName: { type: String, required: true},
  description: { type: String, required: true},
  projectResult: { type: String, required: true },
  technology: { type: String, required: true },
  comparison: { type: String, required: true },
  basis: { type: String, required: true },
  needs: { type: String, required: true },
  targetClient: { type: String, required: true },
  acceptableOutcome: { type: String, required: true },
  needPrototype: { type: Boolean, required: true, default: false },
  prototypeText: { type: String, required: false },
  additionalNeeds: { type: String, required: true },
  private:{Boolean,default:false},
  team: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  moderating: { type: Boolean, required: true, default: false },
  rating: [{type: Object}],
  status: { type: String},
  comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Project', projectSchema);
