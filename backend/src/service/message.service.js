let _messageRepository = null;
const {messageMapping} =  require('./mapping');
class MessageService {
  constructor({ MessageRepository }) {
    _messageRepository = MessageRepository;
  }

  async getById(id) {
      let db = await _messageRepository.getById(id);
      return await messageMapping.dbToMessage(db);
    }

    async getAllByTag(tag) {
      let tags = await _messageRepository.getAllByTag(tag);
      return await messageMapping.dbToMessage(tags);
    }

    async post(body) {
      const message = messageMapping.messageToDb(body);
      return await _messageRepository.post(message);
    }
}
  
module.exports = MessageService;
  