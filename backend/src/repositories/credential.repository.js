const container = require('../container');

const {Storage} = require("../config");
const keys = Storage.Keys;

class CredentialRepository {
    put(credential) {
        if(keys[credential.key])
          throw  Error('FORBIDDEN');
        keys[credential.key] = credential.shared_secret;
      }
}


module.exports = CredentialRepository;
