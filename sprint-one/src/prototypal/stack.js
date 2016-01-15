var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(stackMethods);
  newObj.count = 0;
  newObj.storage = {};
  return newObj;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.count] = value;
	this.count ++;
}

stackMethods.pop = function(){
	if(this.count){
		this.count --;
	}
	var currentElem = this.storage[this.count];
	delete this.storage[this.count];
	return currentElem;
}

stackMethods.size = function(){
	return this.count;
}

