const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


class ServerStartup {
    constructor({ GlobalConfig, RouterStartup}) {
        this._globalConfig = GlobalConfig;
        this._express = express().use(RouterStartup);
      }

      start() {
        return new Promise(resolve => {
          this._server = this._express.listen(this._globalConfig.PORT, () => {
            console.log(`Server is running on the port ${this._globalConfig.PORT}`);
            resolve();
          });
        });
      }
    
      stop() {
        return new Promise(resolve => {
          this._server.close(() =>{
            console.log('server turned off');
            resolve();
          });
        });
      }
}

module.exports = ServerStartup;