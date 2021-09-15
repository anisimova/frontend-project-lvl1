import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isEven = (num) => num % 2 === 0;

const checkingRandomNumbers = () => {
  const taskName = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, answer]);
  }
  startGame(taskName, gameData);
};

export default checkingRandomNumbers;
