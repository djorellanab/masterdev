const {credentialToDb} =  require('./mapping/credential.maping');

let _credentialRepository = null;

class CredentialService {
  constructor({ CredentialRepository }) {
    _credentialRepository = CredentialRepository;
  }
    put(body) {
        let credential = credentialToDb(body);
        return _credentialRepository.put(credential);
    }
  }
  
module.exports = CredentialService;
  