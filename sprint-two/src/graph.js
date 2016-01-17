

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.nodes = [];
	this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	return _.contains(this.nodes, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	var index = _.indexOf(this.nodes, node);
	this.nodes.splice(index, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	for(var i = 0; i < this.edges.length; i++){
		var curNode = this.edges[i];
    if(curNode[0] === fromNode){
			if(curNode[1] === toNode){
				return true;
			};
		 }else if(curNode[1] === fromNode){
			if(curNode[0] === toNode){
				return true;
			};
		};
	};
	return false;
};


// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.edges.push([fromNode,toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	var index = _.indexOf(this.edges, [fromNode,toNode])
	this.edges.splice(index, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



