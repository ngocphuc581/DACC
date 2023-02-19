const mongoose = require('mongoose');
const PhapDanh = mongoose.Schema({
  name_PhapDanh: String,
  level: Number,
});
mongoose.model('PhapDanh', PhapDanh)