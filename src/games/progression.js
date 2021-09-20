import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let n = 1; n <= length; n += 1) {
    progression.push(firstNumber + step * n);
  }
  return progression;
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = 10;
  const indexHiddenElement = getRandomNumber(0, length - 1);
  const progression = getProgression(firstNumber, step, length);
  const answer = progression[indexHiddenElement];
  const question = progression.join(' ').replace(answer, '..');
  return [question, answer];
};

const fillProgression = () => {
  startGame(description, getGameData);
};

export default fillProgression;
