const {Storage} = require("../config");
const keys = Storage.Keys;

module.exports = {
    getShared_secret : function(key){
        return  keys[key];
    }
}