import data from "./data";

var expenses = data.toString().split("\n");

const equals20 = (a: number, b: number, c: number) => {
  return a + b + c === 2020;
};

const getAnswer = (a: number, b: number, c: number) => {
  return a * b * c;
};

const getPuzzleInput = (): number => {
  let total: number;

  expenses.forEach((expense) => {
    expenses.forEach((nextExpense) => {
      expenses.forEach((nextNextExpense) => {
        const firstExpense = parseInt(expense);
        const secondExpense = parseInt(nextExpense);
        const thirdExpense = parseInt(nextNextExpense);

        if (equals20(firstExpense, secondExpense, thirdExpense)) {
          total = getAnswer(firstExpense, secondExpense, thirdExpense);
        }
      });
    });
  });

  return total;
};

export { getPuzzleInput };
