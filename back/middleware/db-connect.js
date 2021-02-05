const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb://localhost:27017/grapes-lab', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = dbConnect;
