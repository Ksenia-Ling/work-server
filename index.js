require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');

const { PORT = 4000 } = process.env;

const app = express(); 

app.use(function setCommonHeaders(req, res, next) {
  res.set("Access-Control-Allow-Private-Network", "true");
  next();
});

app.use(cors);

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса

app.use('/', require('./routes/products'));
app.use('/', require('./routes/blocks'));

mongoose.connect('mongodb://0.0.0.0:27017/workDB', {
  useNewUrlParser: true
  // useCreateIndex: true,
  //   useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});

