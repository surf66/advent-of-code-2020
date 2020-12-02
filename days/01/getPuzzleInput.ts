import data from "./data";

var expenses = data.toString().split("\n");

const equals20 = (a: number, b: number) => {
  return a + b === 2020;
};

const getAnswer = (a: number, b: number) => {
  return a * b;
};

const getPuzzleInput = (): number => {
  let total: number;

  expenses.forEach((expense) => {
    expenses.forEach((nextExpense) => {
      const firstExpense = parseInt(expense);
      const secondExpense = parseInt(nextExpense);

      if (equals20(firstExpense, secondExpense)) {
        total = getAnswer(firstExpense, secondExpense);
      }
    });
  });

  return total;
};

export { getPuzzleInput };
