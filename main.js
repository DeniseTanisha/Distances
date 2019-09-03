// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

const distances = {
  A: { C: 2 },
  B: { D: 4, E: 7 },
  C: { F: 4, D: 1, A: 2 },
  D: { B: 4, G: 2, C: 1, F: 1 },
  E: { B: 7, H: 10 },
  F: { C: 4, D: 1, G: 3 },
  G: { D: 2, F: 3, H: 4 },
  H: { G: 4, E: 10 }
};

const displayRadioValue = () => {
  const start = () => {
    document.getElementsByName("StartPoint");
    for (i = 0; i < start.length; i++) {
      if (start[i].checked)
        document.getElementById("result").innerHTML =
          "StartPoint: " + start[i].value;
    }
  };
  const finish = () => {
    document.getElementsByName("finishPoint");
    for (i = 0; i < finish.length; i++) {
      if (finish[i].checked)
        document.getElementById("result").innerHTML =
          "finishPoint: " + finish[i].value;
    }
  };

  return console.log(distances.StartPoint.FinishPoint);
};

const distance = () => {
  return console.log(distances.A.C);
};








// const ShortestDistanceRoute = (point, processed) => {
//   return Object.keys(point).reduce((lowest, distance) => {
//     if (lowest === null || point[distance] < point[lowest]) {
//       if (!processed.includes(distance)) {
//         lowest = distance;
//       }
//     }
//     return lowest;
//   }, null);
// };

// // function that returns the minimum cost and path to reach Finish
// const routes = distances => {
//   // track lowest cost to reach each node
//   const distances = Object.assign({ finish: Infinity }, graph.start);

//   // track paths
//   const parents = { finish: null };
//   for (let child in graph.start) {
//     parents[child] = "start";
//   }

//   // track nodes that have already been processed
//   const processed = [];

//   let node = lowestCostNode(costs, processed);

//   while (node) {
//     let cost = costs[node];
//     let children = graph[node];
//     for (let n in children) {
//       let newCost = cost + children[n];
//       if (!costs[n]) {
//         costs[n] = newCost;
//         parents[n] = node;
//       }
//       if (costs[n] > newCost) {
//         costs[n] = newCost;
//         parents[n] = node;
//       }
//     }
//     processed.push(node);
//     node = lowestCostNode(costs, processed);
//   }

//   let optimalPath = ["finish"];
//   let parent = parents.finish;
//   while (parent) {
//     optimalPath.push(parent);
//     parent = parents[parent];
//   }
//   optimalPath.reverse();

//   const results = {
//     distance: costs.finish,
//     path: optimalPath
//   };

//   return results;
// };

// console.log(dijkstra(problem));
