import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPrimeNumber = () => {
  const taskName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 100);
    const question = num;
    const answer = isPrime(num) ? 'yes' : 'no';
    gameData.push([question, answer]);
  }
  startGame(taskName, gameData);
};

export default isPrimeNumber;
