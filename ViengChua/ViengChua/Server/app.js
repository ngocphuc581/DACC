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

app.post('/ViengChua/createMoreAccount', async (req, res) => {
  const addMore = await Phat.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      $push: {
        AccountList: [
          {
            id_User: req.body.id_User,
          },
        ],
      },
    },
    {
      new: true,
    },
  );
  res.send(addMore);
});
app.post('/ViengChua/getPhat', async (req, res) => {
  const getPhat = await Phat.find().sort({point: 1});
  res.send(getPhat);
});
app.post('/ViengChua/updateUser', async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      level: req.body.level,
      id_PhapDanh: req.body.id_PhapDanh,
    },
    {
      new: true,
    },
  );
  res.send(updateUser);
});
app.post('/ViengChua/getLevelPhapDanh', async (req, res) => {
  const level = await PhapDanh.findOne({level: req.body.level});
  res.send(level);
});

app.post('/ViengChua/updateNhang', async (req, res) => {
  const updateNhang = await User.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      nhang: req.body.nhang,
    },
    {
      new: true,
    },
  );
  res.send(updateNhang);
});

//----------------------------------Phap Danh--------------------------\\
app.post('/ViengChua/createPhapDanh', async (req, res) => {
  const phapdanh = new PhapDanh({
    name_PhapDanh: req.body.name_PhapDanh,
    level: req.body.level,
  });
  phapdanh.save();
  res.send(phapdanh);
});
app.post('/ViengChua/getPhapDanh', async (req, res) => {
  const getPD = await PhapDanh.findById({_id: req.body._id});
  res.send(getPD);
});
//----------------------------------Ca Dao--------------------------\\
app.post('/ViengChua/createCaDao', async (req, res) => {
  const cadao = new CaDao({
    paragraph1: req.body.paragraph1,
    paragraph2: req.body.paragraph2,
    paragraph3: req.body.paragraph3,
    paragraph4: req.body.paragraph4,
  });
  cadao.save();
  res.send(cadao);
});
app.get('/ViengChua/getCaDao', async (req, res) => {
  const getCaDao = await CaDao.find();
  res.send(getCaDao);
});
//----------------------------------Phat--------------------------\\
app.post('/ViengChua/createPhat', async (req, res) => {
  const phat = new Phat({
    name: req.body.name,
    picture: req.body.picture,
    point: req.body.point,
    AccountList: [],
  });
  phat.save();
  res.send(phat);
});
app.post('/ViengChua/createMoreAccount', async (req, res) => {
  const addMore = await Phat.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      $push: {
        AccountList: [
          {
            id_User: req.body.id_User,
          },
        ],
      },
    },
    {
      new: true,
    },
  );
  res.send(addMore);
});
app.post('/ViengChua/getPhat', async (req, res) => {
  const getPhat = await Phat.find().sort({point: 1});
  res.send(getPhat);
});
app.post('/ViengChua/updateUser', async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(
    {
      _id: req.body._id,
    },
    {
      level: req.body.level,
      id_PhapDanh: req.body.id_PhapDanh,
    },
    {
      new: true,
    },
  );
  res.send(updateUser);
});
app.post('/ViengChua/getLevelPhapDanh', async (req, res) => {
  const level = await PhapDanh.findOne({level: req.body.level});
  res.send(level);
});