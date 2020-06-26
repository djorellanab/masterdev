const uuid = require('uuid-random');

const messages = container.resolve('Storage').Messages;

class MessageRepository {

  add(message){
    let id = uuid();
    messages[id] = message;
    return id;
  }
}


module.exports = MessageRepository;
