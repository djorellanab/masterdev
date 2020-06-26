const { Router } = require('express');

const {credentialValidator} = require("./validators");

module.exports = function ({ CredentialController }) {
  const router = Router();

  router.put('/', credentialValidator.putValidator , CredentialController.put);

  return router;
};
