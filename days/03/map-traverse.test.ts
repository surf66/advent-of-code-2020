import { calculateTotalTrees } from "./map-traverse";

test("should find correct number of trees encountered traversing the map", () => {
  const trees = calculateTotalTrees();

  expect(trees).toEqual(3064612320);
});
