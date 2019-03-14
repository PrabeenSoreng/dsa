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
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("India");
graph.addVertex("England");
graph.addEdge("India", "Tokyo");
graph.addEdge("India", "England");
graph.addEdge("England", "Tokyo");
console.log(graph.adjacencyList);
graph.removeVertex("England");
console.log(graph.adjacencyList);
