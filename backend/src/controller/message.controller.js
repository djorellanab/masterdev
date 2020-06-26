const { validationResult } = require('express-validator');
const { storageHelper } = require("../helpers");
const { authenticationMiddleware } = require("../middlewares");

let _messageService = null;

class MessageController {

    constructor({ MessageService }) {
      _messageService = MessageService;
    }
  
    async getById(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() });  
      const shared_secret  = storageHelper.getShared_secret(req.get('X-Key'));
        if(!shared_secret)
        return res.status(403).send('FORBIDDEN');
      const id = req.params.id;
      try {
        let message = await _messageService.getById(id);
        authenticationMiddleware.signature(res, shared_secret, JSON.stringify(message), `GET;message/${id}`);
        return res.status(200).send({message:"ok"});
      } catch (error) {
        if(error.message === "NOTFOUND"){
          return res.status(404).send("Message did not found");
        }else{
          console.log(error.message);
          return res.status(500).send(error.message); 
        }
      }
    }

    async getAllByTag(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() });  
      const shared_secret  = storageHelper.getShared_secret(req.get('X-Key'));
      if(!shared_secret)
        return res.status(403).send('FORBIDDEN');  
      const tag = req.params.tag;
      try {
        let messages = await _messageService.getAllByTag(tag);
        authenticationMiddleware.signature(res, shared_secret,  JSON.stringify(messages), `GET;message/tag/${tag}`);
        return res.status(200).send({message:"ok"});
      } catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
      }
    }

    async post(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return next({ status: 422, message: errors.array() }); 
      const shared_secret = storageHelper.getShared_secret(req.get('X-Key'));
      if(!shared_secret)
        return res.status(403).send('FORBIDDEN'); 
      try {
        let data = await  _messageService.post(req.body);
        authenticationMiddleware.signature(res, shared_secret, data.id.toString(), `POST;message`)
        return res.status(200).send({message:"ok"});
      } catch (error) {
        if(error.message === "NOTFOUND")
        {
          return next({ status: 422, message:"Some tag dont exist" }); 
        }else{
          return res.status(500).send(error.message);
        }
      }
    }
  }
  
  module.exports = MessageController;
  