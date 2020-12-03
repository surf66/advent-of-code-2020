import data from "./data";

const isValidPassword = (
  policy: string,
  character: string,
  password: string
) => {
  const [p1, p2] = policy.split("-");
  const positionOne = Number(p1) - 1;
  const positionTwo = Number(p2) - 1;

  return (
    (password[positionOne] === character &&
      password[positionOne] !== password[positionTwo]) ||
    (password[positionTwo] === character &&
      password[positionTwo] !== password[positionOne])
  );
};

const passwordValidator = (): number => {
  let validPasswordsCount: number = 0;
  const passwordList = data.toString().split("\n");

  passwordList.forEach((item) => {
    if (item.length === 0) {
      return;
    }

    const [policy, character, password] = item.replace(":", "").split(" ");

    if (isValidPassword(policy, character, password)) {
      validPasswordsCount++;
    }
  });

  return validPasswordsCount;
};

export { passwordValidator };
