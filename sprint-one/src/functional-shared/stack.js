var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newObject = {};

  newObject.count = 0;
  newObject.storage = {};
  _.extend(newObject, stackMethods);
  return newObject;
};

var stackMethods = {};


stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function(){
  if(this.count) {
    this.count -= 1;
  };

  var last = this.storage[this.count];
  delete this.storage[this.count];
  return last;
};

stackMethods.size = function(){
  return this.count;
};
