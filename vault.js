'use strict';
module.exports = function() {

  var vault = {};
  var keyName = [];
  var keyValue = [];

  vault.getValue = function( key ){
    if(!key){
      return null;
    } else {
      var keyIndex = keyName.indexOf(key);
      if(keyIndex < 0){
        return null;
      } else {
        return keyValue[keyIndex];
      }
    }
  };

  vault.setValue = function( key, value ) {
    keyName.push(key);
    keyValue.push(value);

  };

return vault;
};