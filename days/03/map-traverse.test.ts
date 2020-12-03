import { traverseMap } from "./map-traverse";

test("should find correct number of trees encountered traversing the map", () => {
  const trees = traverseMap();

  expect(trees).toEqual(162);
});
