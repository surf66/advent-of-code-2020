import { passwordValidator } from "./password-validator";

test("should find valid passwords", () => {
  const correctPasswords = passwordValidator();

  expect(correctPasswords).toEqual(313);
});
