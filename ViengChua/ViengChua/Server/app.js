const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongooseURI =
  'mongodb+srv://ngocphuc:ngocphuc@cluster0.jm3jwgm.mongodb.net/ViengChua?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

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
