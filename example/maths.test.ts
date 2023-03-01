import { addTwoNumbers } from "./maths";

test("should return the sum of two number", () => {
  const value = addTwoNumbers(1, 2);
  expect(value).toBe(3);
});
