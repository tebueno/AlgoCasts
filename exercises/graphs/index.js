class Graph {
    constructor() {
        this.adjacncyList = {};
    }

    addVertex(name) {
        this.adjacncyList[name] = [];
    }

    addEdge(vert1, vert2) {
        this.adjacncyList[vert1].push(vert2);
        this.adjacncyList[vert2].push(vert1);
    }

    removeEdge(vert1, vert2) {
        const helper = (arr, vert) => {
            return arr.filter(val => val !== vert);
        }
    
        this.adjacncyList[vert1] = helper(this.adjacncyList[vert1], vert2);
        this.adjacncyList[vert2] = helper(this.adjacncyList[vert2], vert1);
    }

    removeVertex(vert) {
        let edges = this.adjacncyList[vert];

        for (let edge of edges) {
            this.removeEdge(vert, edge);
        }

        delete this.adjacncyList[vert];
    }

    DFrecursive(start){ 
        let results = [];
        let visited = {};
        let adjacncyList = this.adjacncyList;

        const helper = (vert) => {
            if (!vert) {
                return null;
            }
            let edges = adjacncyList[vert];
            results.push(vert);
            visited[vert] = true;
            

            for (let edge of edges) {
                if (!visited[edge]) { helper(edge) }
            }
        }

        helper(start);
        return results;
    }

    DFiterative(start, end){ 
        let stack = [start];
        let results = [];
        let visited = {};

        visited[start] = true;
        let currVert;

        while (stack.length) {
            currVert = stack.pop();
            results.push(currVert);
            if (currVert === end) { return results }
            this.adjacncyList[currVert].forEach(friend => {
                if (!visited[friend]) {
                    stack.push(friend);
                    visited[friend] = true;
                }
            });
        }
        return results;
    }

    BFiterative(start, end){ 
        let queue = [start];
        let results = [];
        let visited = {};

        visited[start] = true;
        let currVert;

        while (queue.length) {
            currVert = queue.pop();
            results.push(currVert);
            if (currVert === end) { return results }
            this.adjacncyList[currVert].forEach(friend => {
                if (!visited[friend]) {
                    queue.unshift(friend);
                    visited[friend] = true;
                }
            });
        }
        return results;
    }
}

let g = new Graph();

g.addVertex('Ava');
g.addVertex('Tom');
g.addVertex('Nick');
g.addVertex('Kevin');
g.addVertex('Alexa');
g.addVertex('Ed');
g.addEdge('Ava', 'Tom');
g.addEdge('Tom', 'Nick');
g.addEdge('Tom', 'Ed');
g.addEdge('Nick', 'Kevin');
g.addEdge('Alexa', 'Ava');
g.addEdge('Tom', 'Kevin');
g.addEdge('Ed', 'Kevin');
console.log(g);
console.log(g.DFiterative('Kevin', 'Ava'));
