require('dotenv').config();

const {Server} = require('../ApiDonantes/models/server');

const server = new Server();

server.listen();