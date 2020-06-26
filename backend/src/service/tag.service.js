let _tagRepository = null;
const {tagMapping} =  require('./mapping');
class TagService {
  constructor({ TagRepository }) {
    _tagRepository = TagRepository;
  }
  
  async post(body) {
      const tag = tagMapping.tagToDb(body);
      await _tagRepository.post(tag);
    }

  async getAll() {
      const db = await tagMapping.getAll();
      return await tagMapping.dbToTag(db);
    }
}
  
module.exports = TagService;
  