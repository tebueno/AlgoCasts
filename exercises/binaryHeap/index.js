class Heap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        if (index === 0) { return }
        let parent = Math.floor((index - 1) / 2);
        
        while (this.values[index] > this.values[parent] && parent >= 0) {
            [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }

    }

    extractMax() {
        this.values.shift();
        if (this.values.length === 0) { return }
        this.values.unshift(this.values.pop());
        let index = 0;
        let leftChildIndx = 2 * index + 1;
        let rightChildIndx = 2 * index + 2;
        while (this.values[index]) {
            let swap = null;
            if (!this.values[rightChildIndx] && !this.values[leftChildIndx]) {
                return;
            } else if (!this.values[rightChildIndx] && this.values[leftChildIndx] && this.values[index] < this.values[leftChildIndx]) {
                [this.values[index], this.values[leftChildIndx]] = [this.values[leftChildIndx], this.values[index]]
                index = leftChildIndx;
                swap = true;
            } else if (this.values[leftChildIndx] < this.values[rightChildIndx] && this.values[rightChildIndx] > this.values[index]) {
                [this.values[index], this.values[rightChildIndx]] = [this.values[rightChildIndx], this.values[index]]
                index = rightChildIndx;
                swap = true;
            } else if (this.values[index] < this.values[leftChildIndx]) {
                [this.values[index], this.values[leftChildIndx]] = [this.values[leftChildIndx], this.values[index]]
                index = leftChildIndx;
                swap = true;
            }
            if (swap === null) { return }
            leftChildIndx = 2 * index + 1;
            rightChildIndx = 2 * index + 2;
            
        }
    }
}

let heap = new Heap();
heap.insert(25);
console.log(heap.values);
heap.insert(15);
console.log(heap.values);
heap.insert(100);
console.log(heap.values);
heap.insert(34);
heap.insert(48);
heap.insert(120);
heap.insert(24);
heap.insert(68);
heap.insert(199);
heap.insert(111);
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);