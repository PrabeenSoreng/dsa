// Storing and Removing vertex and edges from the graph using Adjacency List.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    const vidx1 = this.adjacencyList[vertex1].indexOf(vertex2);
    const vidx2 = this.adjacencyList[vertex2].indexOf(vertex1);
    this.adjacencyList[vertex1].splice(vidx1, 1);
    this.adjacencyList[vertex2].splice(vidx2, 1);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(v => {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          node => node !== vertex
        );
      });
      delete this.adjacencyList[vertex];
    }
  }

  DFRecursive(start) {
    const result = [];
    const visited = {};

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs.bind(this, neighbor)();
      });
    }.bind(this, start)());
    return result;
  }

  DFIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.adjacencyList);
console.log(graph.DFRecursive("A"));
console.log(graph.DFIterative("A"));
