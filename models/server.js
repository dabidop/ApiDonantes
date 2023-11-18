const express = require("express");
const { dbConection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.donantesPath = "/donantes";
    this.routes();
    this.conectarDB();
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log("escuchando en el puerto" + this.port);
    });
  };

  routes() {
    this.app.use(this.donantesPath, require("../routes/donantes"));
  }

  async conectarDB() {
    await dbConection();
  }
}

module.exports = { Server };
