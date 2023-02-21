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
//----------------------------------User--------------------------------\\
app.post('/ViengChua/getUser', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  res.send(user);
});
app.post('/ViengChua/createUser', async (req, res) => {
  const getId = await PhapDanh.findOne({level: 1});
  const user = await new User({
    username: req.body.username,
    password: req.body.password,
    point: req.body.point,
    level: getId.level,
    nhang: req.body.nhang,
    id_PhapDanh: getId._id,
  });
  user.save();
  res.send(user);
});

app.post('/ViengChua/checkAccount', async (req, res) => {
  const check = await User.findOne({username: req.body.username});
  res.send(check);
});

app.post('/ViengChua/changePassword', async (req, res) => {
  const changePassword = await User.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      password: req.body.password,
    },
    {new: true},
  );
  res.send(changePassword);
});
