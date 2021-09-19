import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const checkingRandomNumbers = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(description, getGameData);
};

export default checkingRandomNumbers;
