class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val, node = this.root) {
        if (!this.root) { 
            this.root = new Node(val);
            return this; 
        }

        if (val === node.value) { return undefined }
        if (val < node.value && !node.left) {
            node.left = new Node(val);
            return node.left;
        }  
        if (val > node.value && !node.right) {
            node.right = new Node(val);
            return node.right;
        } 
        if (val < node.value) { 
            node = node.left 
        }  
        if (val > node.value) { 
            node = node.right 
        }
        
        this.insert(val, node);
    }

    find(val, node = this.root) {
    
        // TODO: Figure why the fuck this doesn't work!!!!
        if (val === node.value) { return 'apple' }
        if (val < node.value) { 
            node = node.left 
        }  
        if (val > node.value) { 
            node = node.right 
        }
   
        this.find(val, node);
    }
}

let tree = new BinarySearchTree();
tree.insert(23);
tree.insert(223);
tree.insert(2);
tree.insert(28);
tree.insert(-1);
let x = tree.find(2);
console.log(x);
