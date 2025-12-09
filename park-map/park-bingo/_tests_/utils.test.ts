import { addNumbers } from "../app/lib/utils";

test("adds two numbers correctly", () => {
  expect(addNumbers(2, 3)).toBe(5);
  expect(addNumbers(-1, 1)).toBe(0);
});
