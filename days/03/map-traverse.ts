import data from "./data";

const traverseMap = (): number => {
  let lines = data.split("\n");
  let trees = 0;
  let col = 0;

  lines.forEach((line) => {
    if (line.length === 0) {
      return;
    }

    if (line[col % 31] == "#") {
      trees++;
    }
    col += 3;
  });

  return trees;
};

export { traverseMap };
