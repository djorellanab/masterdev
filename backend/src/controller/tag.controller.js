let _tagService = null;

class TagController {

    constructor({ TagService }) {
      _tagService = TagService;
    }
  
    index(req, res) {
      return res.send(_tagService.index());
    }
  }
  
  module.exports = TagController;
  