import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const findGCD = () => {
  const taskName = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = gcd(firstNumber, secondNumber);
    gameData.push([question, answer]);
  }
  startGame(taskName, gameData);
};

export default findGCD;
