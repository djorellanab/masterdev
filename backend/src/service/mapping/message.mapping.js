const objectMapper = require('object-mapper');

function messageToDb(message) {
    let map = {
      'id ': 'id',
      'msg': 'msg',
      'tags': 'tags'
    };
    return objectMapper(message, map);
  }

function dbToMessage(db) {
    let map = {
        'id ': 'id',
        'msg': 'msg',
        'tags': 'tags'
      };
    return objectMapper(db, map);
  }
  
  module.exports= {
    messageToDb,
    dbToMessage
  };
  