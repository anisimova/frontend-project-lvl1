import { base, randomNumber } from '../index.js';

const startRandomCalc = () => {
  const taskName = 'What is the result of the expression?';
  const questionAnswerArray = [];
  for (let i = 0; i < 6; i += 2) {
    const firstNumber = randomNumber(20);
    const secondNumber = randomNumber(20);
    const operationsArray = ['+', '-', '*'];
    const sp = ' ';
    const operation = operationsArray[Math.floor(Math.random() * operationsArray.length)];
    questionAnswerArray[i] = firstNumber.toString() + sp + operation + sp + secondNumber.toString();
    if (operation === operationsArray[0]) {
      questionAnswerArray[i + 1] = firstNumber + secondNumber;
    } if (operation === operationsArray[1]) {
      questionAnswerArray[i + 1] = firstNumber - secondNumber;
    } if (operation === operationsArray[2]) {
      questionAnswerArray[i + 1] = firstNumber * secondNumber;
    }
  }
  base(taskName, questionAnswerArray);
};

export default startRandomCalc;
