const { body, param} = require('express-validator');

const postValidator = [
    body('msg')
        .isString().withMessage('key must be string')
        .notEmpty().withMessage('key must not be empty'),
    body('tags')
        .custom((tags) =>{ 
            if(!Array.isArray(tags))
                return Promise.reject('tags must be array');
            if(tags.length < 1)
                return Promise.reject('tags must have one element');
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];   
                if(!Number.isInteger(tag))
                    return Promise.reject('all tags must be integer');
            }
        })
    ];

const getIdValidator = [
    param('id')
    .isUUID().withMessage('Id must be anuuid')
];

const getTagValidator = [
    param('tag')
    .isNumeric().withMessage('Tag must be numeric')
    .notEmpty().withMessage('tag must not be empty'),
];

module.exports = {postValidator, getIdValidator, getTagValidator};
    