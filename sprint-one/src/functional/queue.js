var Queue = function(){
  var count = 0;

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function(){
    var currentElem;
    for(var key in storage){
      currentElem = storage[key];
      delete storage[key];
      break;
    }
    return currentElem;
  }

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
