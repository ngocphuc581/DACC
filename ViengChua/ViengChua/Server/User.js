const mongoose = require('mongoose');
const User = mongoose.Schema({
  username: String,
  password: String,
  point: Number,
  level: Number,
  nhang: Number,
  id_PhapDanh: String,
});

mongoose.model('User', User);
