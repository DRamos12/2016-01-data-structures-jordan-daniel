var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
     storage[count] = value;
     count += 1;
  };

  someInstance.pop = function(){
    if(count){
     count -= 1;
    }
    var last = storage[count];
    delete storage[count];
    return last;
  };


  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
