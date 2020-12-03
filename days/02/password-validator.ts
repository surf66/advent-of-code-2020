import data from "./data";

const isValidPassword = (policy: string, count: number) => {
  const [low, high] = policy.split("-");
  return count >= Number(low) && count <= Number(high);
};

const passwordValidator = (): number => {
  let validPasswordsCount: number = 0;
  const passwordList = data.toString().split("\n");

  passwordList.forEach((item) => {
    if (item.length === 0) {
      return;
    }

    const [policy, character, password] = item.replace(":", "").split(" ");

    let count: number = 0;
    for (let letter of password.split("")) {
      letter === character ? count++ : null;
    }

    if (isValidPassword(policy, count)) {
      validPasswordsCount++;
    }
  });

  return validPasswordsCount;
};

export { passwordValidator };
