let _messageService = null;

class MessageController {

    constructor({ MessageService }) {
      _messageService = MessageService;
    }
  
    index(req, res) {
      return res.send(_messageService.index());
    }
  }
  
  module.exports = MessageController;
  