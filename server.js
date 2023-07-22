require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload'); // Renomeado para fileUpload (com "U" maiúsculo)

const server = express(); // Movido para o topo do arquivo

server.use(fileUpload()); // Chame o middleware fileUpload, não fileupload

const apiRoutes = require('./src/router');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log('Erro: ', error.message);
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));

server.use('/', apiRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: ${process.env.BASE}`);
});
