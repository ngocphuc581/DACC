const mongoose = require('mongoose');
const CaDao = mongoose.Schema({
  paragraph1: String,
  paragraph2: String,
  paragraph3: String,
  paragraph4: String,
});
mongoose.model('CaDao', CaDao);
