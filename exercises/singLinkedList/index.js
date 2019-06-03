class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) { return undefined }
        if (!this.head.next) { 
            this.head = null;
            this.length--;
            this.tail = null;
            return this;
        }

        let slowNode = this.head;
        let fastNode = this.head.next;

        while (fastNode.next) {
            slowNode = slowNode.next;
            fastNode = fastNode.next;
        }
        
        slowNode.next = null;
        this.tail = slowNode;
        this.length--;
        return fastNode;
    }

    shift() {
        if (!this.head) { return undefined }
        
        let headNode = this.head;
        this.head = headNode.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return headNode;
    }

    unshift(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(index) {
        let counter = 0;
        let node = this.head;

        if (index < 0 || index >= this.length) { return null }

        while (counter !== index) {
            counter++;
            node = node.next;
        }
        return node;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.data = val;
            return true;
        } 

        return false;
    }

    insert(index, val) {
        // out of bounds
        if (index < 0 || index > this.length) { return false }
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        
        if (index === 0) {
            this.unshift(val);
            return true;
        } else if (index === this.length) {
            this.push(val);
            return true;
        } else {
            newNode.next = nextNode;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }
        
    remove(index) {
        if (index < 0 || index >= this.length) { return undefined }

        if (index === this.length - 1) { return this.pop() }

        if (index === 0) { return this.shift() }

        let prevNode = this.get(index - 1);
        let currentNode = this.get(index);
        const nextNode = this.get(index + 1);


        prevNode.next = nextNode;
        this.length--;
        return currentNode.data;

    }

    reverse() {
        if (this.length <=1) { return this.head }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let nextNode = this.tail.next;
        this.head.next = nextNode;
        return this.head;
    }

}

let node = new Node(32);

let list = new SinglyLinkedList();

console.log(list.push(55));
console.log(list.push(32));
console.log(list.push(4));
console.log(list.reverse());
console.log(list);

