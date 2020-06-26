const {hashHelper} = require('../helpers')

module.exports = {
    signature: function (res, shared_secret, data, route) {
    const signature = hash.hmacToSha256(shared_secret, data)
    res.set('X-Route', route);
    res.set('X-Key', key);
    res.set('X-Signature', signature);
  }
}
  