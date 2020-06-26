
const {Storage} = require("../config");
const messages = Storage.Messages;

class MessageRepository {

  async post(message){
    let id = Storage.CountMessage;
    for (let i = 0; i <  message.tags.length; i++) {
      const tag =  message.tags[i];
      if(!Storage.Tags[tag])
        throw Error('NOTFOUND');
    }
    messages[id] = message;
    Storage.CountMessage++;
    return {id};
  }

  async getById(id){
    const message = messages[id];
    if (!message)
      throw Error('NOTFOUND');
    return message;
  }

  async getAllByTag(tag){
    tag = parseInt(tag, 10);
    const db = [];
    for (var key in messages) {
      if(messages[key].tags.includes(tag)){
        db.push({id:key,
          msg: messages[key].msg,
          tags: messages[key].tags  });
      }
    }
    return db;
  }
}


module.exports = MessageRepository;
