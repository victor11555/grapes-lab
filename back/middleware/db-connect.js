const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb+srv://victor:123@cluster0.a9zcb.mongodb.net/grapes-lab', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = dbConnect;
