const uuid = require('uuid-random');

const {Storage} = require("../config");
const tags = Storage.Tags;

class TagRepository {

  async post(tag){
    tags[Storage.CountTag] = tag;
    Storage.CountTag++;
  }
  
  async getAll(){
    let db =[];
    for (var key in tags) {
      db.push({id:key, name: tags[key].name})
    }
    return db;
  }
}


module.exports = TagRepository;
