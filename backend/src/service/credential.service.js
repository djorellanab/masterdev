const {credentialMapping} =  require('./mapping');

let _credentialRepository = null;

class CredentialService {
  constructor({ CredentialRepository }) {
    _credentialRepository = CredentialRepository;
  }
    async put(body) {
        let credential = credentialMapping.credentialToDb(body);
        await _credentialRepository.put(credential);
    }
  }
  
module.exports = CredentialService;
  