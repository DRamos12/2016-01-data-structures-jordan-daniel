var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    //if this first node, set head and tail to newNode
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    //cache the value of the first node, then delete the node
    var oldHeadVal = list.head.value;
    list.head = list.head.next;
    //and return the cached node
    return oldHeadVal;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key]['value']===target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
