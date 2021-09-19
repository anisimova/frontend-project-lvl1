import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const num = getRandomNumber(1, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const isPrimeNumber = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(description, getGameData);
};

export default isPrimeNumber;
