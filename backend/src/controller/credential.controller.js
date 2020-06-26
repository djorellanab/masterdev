const { validationResult } = require('express-validator');

let _credentialService = null;

class CredentialController {

    constructor({ CredentialService }) {
      _credentialService = CredentialService;
    }
  
    async put(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() });  
      try {
        await _credentialService.put(req.body);
        return res.status(204).send({message:"ok"});
      } catch (error) {
        if(error.message == 'FORBIDDEN')
          return res.status(403).send('FORBIDDEN')
        else
        {
          return res.status(500).send(error.message)
        }
      }
    }
  }
  
  module.exports = CredentialController;
  