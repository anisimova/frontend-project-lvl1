import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const getCalculation = (operation, firstNumber, secondNumber) => {
  if (operation === '+') {
    return firstNumber + secondNumber;
  } if (operation === '-') {
    return firstNumber - secondNumber;
  }
  return firstNumber * secondNumber;
};

const startRandomCalc = () => {
  const taskName = 'What is the result of the expression?';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 20);
    const secondNumber = getRandomNumber(1, 20);
    const basicOperations = ['+', '-', '*'];
    const operation = basicOperations[Math.floor(Math.random() * basicOperations.length)];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const answer = getCalculation(operation, firstNumber, secondNumber);
    gameData.push([question, answer]);
  }
  startGame(taskName, gameData);
};

export default startRandomCalc;
