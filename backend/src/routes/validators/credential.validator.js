const { body } = require('express-validator');

const putValidator = [
    body('key')
        .isString().withMessage('key must be string')
        .notEmpty().withMessage('key must not be empty'),
    body('shared_secret')
        .isString().withMessage('key must be string')
        .notEmpty().withMessage('key must not be empty')
    ];

module.exports = {putValidator};
    
  