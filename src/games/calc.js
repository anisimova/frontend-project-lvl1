import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What is the result of the expression?';

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return undefined;
  }
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operation = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(operation, firstNumber, secondNumber);
  return [question, answer];
};

const startRandomCalc = () => {
  startGame(description, getGameData);
};

export default startRandomCalc;
