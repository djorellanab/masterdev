const { body } = require('express-validator');

const postValidator = [
    body('name')
        .isString().withMessage('key must be string')
        .notEmpty().withMessage('key must not be empty')
    ];

module.exports = {postValidator};
    
  