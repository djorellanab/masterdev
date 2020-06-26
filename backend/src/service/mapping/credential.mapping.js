const objectMapper = require('object-mapper');

function credentialToDb(credential) {
    let map = {
      'shared_secret ': 'shared_secret ',
      'key': 'key'
    };
    return objectMapper(credential, map);
  }

function dbToCredential(db) {
    let map = {
      'shared_secret ': 'shared_secret ',
      'key': 'key'
    };
    return objectMapper(db, map);
  }
  
  module.exports= {
    credentialToDb,
    dbToCredential
  };
  