function findCheapestPrice(n, flights, src, dst, k) {
    const graph = {};

    for (const [from, to, price] of flights) {
        if (!graph.hasOwnProperty(from)) {
            graph[from] = [];
        }
        graph[from].push([to, price]);
    }

    const queue = [[src, 0, 0]];
    while (queue.length > 0) {
        const [currentCity, currentCost, stops] = queue.shift();
        if (currentCity === dst) return currentCost;
        if (stops > k) continue;
        if (graph[currentCity]) {
            for (const [nextCity, price] of graph[currentCity]) {
                queue.push([nextCity, currentCost + price, stops + 1]);
            }
        }
    }
    return -1;
}

// Test case 1
const flights1 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights1, 0, 3, 1) + ", Expected: 700");

// Test case 2
const flights2 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights2, 0, 3, 0) + ", Expected: -1");

// Test case 3
const flights3 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(3, flights3, 0, 2, 0) + ", Expected: 500");

const flights4 = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
console.log(findCheapestPrice(3, flights4, 0, 2, 0))