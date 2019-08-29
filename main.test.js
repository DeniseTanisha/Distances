const distance = require("./main.js");

test("difference between two points to be shortest route possible", () => {
  expect(distance(A, C)).toBe(2);
  expect(distance(C, D)).toBe(1);
  expect(distance(C, F)).toBe(4);
  expect(distance(B, D)).toBe(4);
  expect(distance(B, E)).toBe(7);
  expect(distance(D, F)).toBe(1);
  expect(distance(D, G)).toBe(2);
  expect(distance(F, G)).toBe(3);
  expect(distance(G, H)).toBe(4);
  expect(distance(E, H)).toBe(10);
});

test("the routes should always come up with a distance", () => {
  expect(distance(A, H)).not.toBe(0);
});
