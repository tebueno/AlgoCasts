// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) { 
            this.root = new Node(val);
            return this; 
        } 

        let node = this.root;
        while (true) {
            if (!node) { return }
            if (val === node.value) { return }
            if (val <= node.value) {
                if (node.left === null) {
                    node.left = new Node(val);
                    return node.left;
                }
                node = node.left
            }  
            if (val >= node.value) {
                if (node.right === null) {
                    node.right = new Node(val);
                    return node.right;
                }
                node = node.right;
            } 
        }
        
    }

    bfTraverse() {
        let node = this.root;
        let queue = [];
        let result = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            if (node.left) { queue.push(node.left); }
            if (node.right) { queue.push(node.right); }
            result.push(node.value);
        }
        return result;

    }

    dfTraverse() {
        let node = this.root;
        let queue = [];
        let result = [];
        
        const recursiveHelper = (node) => {
            queue.push(node);
            result.push(node.value)
            if (node.left) { recursiveHelper(node.left) }
            if (node.right) { recursiveHelper(node.right) }
            return result;
        }

        return recursiveHelper(node);
    }

    dfPostOrder() {

    let node = this.root;
    let result = [];
    
    const recursiveHelper = (node) => {
        
        if (node.left) { recursiveHelper(node.left) }
        if (node.right) { recursiveHelper(node.right) }
        result.push(node.value)
        return result;
    }

    return recursiveHelper(node);
}


dfInOrder() {

    let node = this.root;
    let result = [];
    
    const recursiveHelper = (node) => {
        
        if (node.left) { recursiveHelper(node.left) }
        result.push(node.value)
        if (node.right) { recursiveHelper(node.right) }
        return result;
    }

    return recursiveHelper(node);
}

}

class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

let tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(28);
tree.insert(20);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(2);
tree.insert(38);
tree.insert(90);
tree.insert(11);
tree.insert(15);
console.log(tree.dfInOrder());

module.exports = { Tree, Node };
