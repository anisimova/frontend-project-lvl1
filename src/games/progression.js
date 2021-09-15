import startGame from '../index.js';
import getRandomNumber from '../utilities.js';

const getProgression = (firstNumber, stepProgression, lengthProgression) => {
  let progression = '';
  const space = ' ';
  for (let n = 1; n <= lengthProgression; n += 1) {
    progression += (firstNumber + stepProgression * n) + space;
  }
  return progression;
};

const fillProgression = () => {
  const taskName = 'What number is missing in the progression?';
  const gameData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const stepProgression = getRandomNumber(1, 10);
    const lengthProgression = 10;
    const indexHiddenElement = getRandomNumber(1, lengthProgression);
    const hiddenElement = '..';
    const progression = getProgression(firstNumber, stepProgression, lengthProgression);
    const answer = firstNumber + stepProgression * indexHiddenElement;
    const question = progression.replace(answer, hiddenElement);
    gameData.push([question, answer]);
  }
  startGame(taskName, gameData);
};

export default fillProgression;
