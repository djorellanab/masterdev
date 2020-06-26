let _homeService = null;

class CredentialController {

    constructor({ CredentialService }) {
      _credentialService = CredentialService;
    }
  
    async put(req, res) {
      try {
        await _credentialService.put(req.body);
        return res.status(204).send('');
      } catch (error) {
        if(error.message == 'FORBIDDEN')
          return res.status(403).send('FORBIDDEN')
        else
          return res.status(500).send(error.message)
      }
    }
  }
  
  module.exports = CredentialController;
  