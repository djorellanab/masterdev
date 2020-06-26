const keys = container.resolve('Storage').Keys;

module.exports = {
    getShared_secret : function(key){
        return  keys[key];
    }
}