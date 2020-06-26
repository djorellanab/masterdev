const crypto = require('crypto')

module.exports = {
    hmacToSha256: function(shared_secret, data){
        return crypto.createHmac('sha256', shared_secret)
        .update(data)
        .digest('hex');
    }
}