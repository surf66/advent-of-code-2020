import { data, slopes } from "./data";

const traverseMap = (map, slope): number => {
  let trees: number = 0;
  let row: number = 0;
  let col: number = 0;

  while (row < map.length - 2) {
    col = col += slope.right;
    row = row += slope.down;

    if (map[row][col % 31] === "#") {
      trees++;
    }
  }
  return trees;
};

const calculateTotalTrees = () => {
  const map = data.split("\n");
  map.shift();
  let totalTrees = [];

  slopes.forEach((slope) => {
    const treesOnSlope = traverseMap(map, slope);
    totalTrees.push(treesOnSlope);
  });

  return totalTrees.reduce((a, b) => a * b);
};

export { calculateTotalTrees };
