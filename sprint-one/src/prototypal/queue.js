var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObject = Object.create(queueMethods);
  newObject.count = 0;
  newObject.storage = {};

  return newObject;
};

var queueMethods = {};


queueMethods.enqueue= function(value){
	this.storage[this.count] = value;
	this.count ++;
}

queueMethods.dequeue = function(){
	var currentElem;
	for(var key in this.storage){
		currentElem = this.storage[key];
	delete this.storage[key];
	break;
	};
	return currentElem;
};

queueMethods.size = function(){
	return Object.keys(this.storage).length;
}
