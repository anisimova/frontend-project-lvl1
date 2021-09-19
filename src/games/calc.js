import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const calculate = (operation, firstNumber, secondNumber) => {
  let answer = 0;
  switch (operation) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      answer = undefined;
  }
  return answer;
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operation = operators[getRandomNumber(0, operators.length)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(operation, firstNumber, secondNumber);
  return [question, answer];
};

const startRandomCalc = () => {
  const description = 'What is the result of the expression?';
  startGame(description, getGameData);
};

export default startRandomCalc;
