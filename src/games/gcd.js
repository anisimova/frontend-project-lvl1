import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);
  return [question, answer];
};

const findGCD = () => {
  startGame(description, getGameData);
};

export default findGCD;
