const { validationResult } = require('express-validator');
let _tagService = null;

class TagController {

    constructor({ TagService }) {
      _tagService = TagService;
    }
  
    async post(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() });  
      try {
        await _tagService.post(req.body);
        return res.status(201).send({message:"okay"});
      } catch (error) {
        return res.status(500).send(error.message); 
      }
    }

    async getAll(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() });  
      try {
        let tags = await _tagService.getAll();
        return res.status(201).json(tags);
      } catch (error) {
        return res.status(500).send(error.message); 
      }
    }
  }
  
  module.exports = TagController;
  