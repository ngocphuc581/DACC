const mongoose = require('mongoose');
const Phat = mongoose.Schema({
  name: String,
  picture: String,
  point: Number,
  AccountList: [
    {
      id_User: String,
    },
  ],
});
mongoose.model('Phat', Phat);
