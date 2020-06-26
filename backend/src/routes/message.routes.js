const { Router } = require('express');

const {messageValidator} = require("./validators");


module.exports = function ({ MessageController }) {
  const router = Router();

  router.get('/:id',messageValidator.getIdValidator , MessageController.getById);
  router.get('/tag/:tag', messageValidator.getTagValidator, MessageController.getAllByTag);

  router.post('/', messageValidator.postValidator, MessageController.post);

  return router;
};
