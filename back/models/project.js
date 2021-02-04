const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  status: { type: String, required: true },
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
  team: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}],
  moderating: { type: Boolean, required: true, default: false },
  rating: { type: Number, required: true, default: 0 },
  comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}]
});

module.exports = mongoose.model('Project', projectSchema);
