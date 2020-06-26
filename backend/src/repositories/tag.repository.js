const uuid = require('uuid-random');

const tags = container.resolve('Storage').Tags;

class TagRepository {

  async post(tag){
    let id = uuid();
    tags[id] = tag;
  }
  
  async getAll(){
    return tags;
  }
}


module.exports = TagRepository;
