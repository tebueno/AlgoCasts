// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.getFirst();
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.getFirst();
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next || null;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return
        }

        let node = this.head.next;
        let prev = this.head;

        while (node.next) {
            prev = node;
            node = node.next;
        }
        
        prev.next = null;

    }

    insertLast(data) {
        const last = this.getLast();
        (last) ? last.next = new Node(data) : this.head = new Node(data);
    }

    getAt(index) {
        let counter = 0,
            node = this.head;
        
        while (counter < index && node) {
            node = node.next;
            counter++;
        }

        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            this.head = this.getAt(index + 1);
        } else {
            this.getAt(index - 1).next = this.getAt(index + 1);
        }

    }

    insertAt(data, index) {
        if (this.size() < index) {
            this.insertLast(data);
            return;
        } 

        if (index === 0) {
            this.insertFirst(data);
        } else {
            const nextNode = this.getAt(index);
            console.log(nextNode);
            this.getAt(index - 1).next = new Node(data, nextNode);
        }

    }

    forEach(fn) {
        let index = 0,
            len = this.size() - 1;
        while (index <= len) {
            fn(this.getAt(index), index);
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

let list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);


list.removeLast();


module.exports = {
    Node,
    LinkedList
};