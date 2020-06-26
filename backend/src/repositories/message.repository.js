const uuid = require('uuid-random');

const messages = container.resolve('Storage').Messages;

class MessageRepository {

  async post(message){
    let id = uuid();
    messages[id] = message;
    return {id};
  }

  async getById(id){
    const message = messages[id];
    if (!message)
      throw Error('NOTFOUND');
    return message;
  }

  async getAllByTag(tag){
    const messages = await messages
    .filter((message)=>{
      return message.tags.includes(tag)
    });
    return messages;
  }
}


module.exports = MessageRepository;
