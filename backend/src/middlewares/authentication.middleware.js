const {hashHelper} = require('../helpers')

module.exports = {
    signature: function (res, shared_secret, data, route) {
    const signature = hashHelper.hmacToSha256(shared_secret, data)
    res.set('X-Route', route);
    res.set('X-Key', shared_secret);
    res.set('X-Signature', signature);
  }
}
  