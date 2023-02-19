const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongooseURI =
  'mongodb+srv://ngocphuc:ngocphuc@cluster0.jm3jwgm.mongodb.net/ViengChua?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

require('./User');
require('./PhapDanh');
require('./CaDao');
require('./Phat');
const User = mongoose.model('User');
const PhapDanh = mongoose.model('PhapDanh');
const CaDao = mongoose.model('CaDao');
const Phat = mongoose.model('Phat');

mongoose.connect(MongooseURI, {
  useNewUrlParser: true,
});
mongoose.set('strictQuery', true);

mongoose.connection.on('Connected', () => {
  console.log('Connect DB Success');
});
mongoose.connection.on('warning', () => {
  console.log('Connect Error');
});
app.use(express.json());
