const objectMapper = require('object-mapper');

function tagToDb(tag) {
    let map = {
      'id ': 'id',
      'name': 'name'
    };
    return objectMapper(tag, map);
  }

function dbToTag(db) {
    let map = {
        'id ': 'id',
        'name': 'name'
      };
    return objectMapper(db, map);
  }
  
  module.exports= {
    tagToDb,
    dbToTag
  };
  