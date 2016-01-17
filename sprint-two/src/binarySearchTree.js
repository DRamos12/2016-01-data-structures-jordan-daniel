var BinarySearchTree = function(value){

	var tree = Object.create(BinarySearchTree.prototype);

	tree.value = value;
	tree.left = null;
	tree.right = null;

	return tree;
};

BinarySearchTree.prototype.insert = function (newNodeVal){
  //checking if this.value is greater or less than the passed-in value
  //if newNodeVal is less, checking left section of tree
  if(this.value > newNodeVal){
  	if(this.left === null){
      //recursively call BinarySearchTree to 
      //search this.value in child nodes
  		this.left = BinarySearchTree(newNodeVal);
  	} else {
  	  this.left.insert(newNodeVal);
  	}
  //if newNodeVal is greater, checking right section of tree
  } else if (this.value < newNodeVal){
    if(this.right===null){
      this.right = BinarySearchTree(newNodeVal);
    } else {
      this.right.insert(newNodeVal);
    }
  }
};
BinarySearchTree.prototype.contains = function (target){
  if(this.value === target){
    return true;  
  }
  if(this.value > target){
  	if(this.left === null){
  		return false;
  	} else {
  		return this.left.contains(target);
  	}
    
    } else if (this.value < target){
  	if(this.right === null){
  		return false;
  	} else {
  		return this.right.contains(target);
  	}
  }
};

BinarySearchTree.prototype.depthFirstLog = function (callback){
  //loop over every node and complete the callback on each node
  callback(this.value);
  if(this.left){
    return this.left.depthFirstLog(callback);
  }
  if(this.right){
  	return this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
