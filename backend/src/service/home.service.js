let _homeRepository = null;
class HomeService {
  constructor({ HomeRepository }) {
    _homeRepository = HomeRepository;
  }
    index() {
      return _homeRepository.hello();
    }
  }
  
module.exports = HomeService;
  