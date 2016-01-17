var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //i is the current index of our storage, derived from k
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  //If the bucket hasn't been set, then set it to an empty array
  // and re-get bucket
  if(!bucket){
    this._storage.set(i, []);
    bucket = this._storage.get(i);
  }
  //if bucket exists, loop over it to check if k (key)
  //exists. If it does, v (value) to k.
  //Else push new tuple with k and v
  if (bucket){
    for(var j = 0; j < bucket.length; j++){
      var tuple = bucket[j];
      if(tuple[0] === k){
        tuple[1] = v;
      }   
    }
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    return null;
  }
  //loop over, check for the key and return the value
  if(bucket){
    for(var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if(tuple[0] === k) {
        return tuple[1];
      }
    } 
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    return null;
  }
  //loop over the bucket.
  for (var j = 0; j < bucket.length; j++){
    //caching the tuple
    var tuple = bucket[j];
      if(tuple[0] === k){
        //if the key is found, use splice to remove it
        bucket.splice(j,1);
        //and remove cached value
        return tuple[1];
      
      }
    }
  return null;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
