const { Router } = require('express');

const {tagValidator} = require("./validators");

module.exports = function ({ TagController }) {
  const router = Router();

  router.post('/', tagValidator.postValidator,TagController.post);
  router.get('/', TagController.getAll);

  return router;
};
