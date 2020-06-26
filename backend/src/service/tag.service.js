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
      const db = await _tagRepository.getAll();
      return await db;
    }
}
  
module.exports = TagService;
  