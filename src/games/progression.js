import { base, randomNumber } from '../index.js';

const fillProgression = () => {
  const taskName = 'What number is missing in the progression?';
  const questionAnswerArray = [];
  for (let i = 0; i < 6; i += 2) {
    const firstNumber = randomNumber(10);
    const stepProgression = randomNumber(10);
    const indexHiddenElement = randomNumber(10);
    const space = ' ';
    const hiddenElement = '..';
    questionAnswerArray[i] = '';
    for (let n = 1; n < 11; n += 1) {
      if (indexHiddenElement === n) {
        questionAnswerArray[i] += hiddenElement + space;
      } else {
        questionAnswerArray[i] += (firstNumber + stepProgression * n) + space;
      }
    }
    questionAnswerArray[i + 1] = firstNumber + stepProgression * indexHiddenElement;
  }
  base(taskName, questionAnswerArray);
};

export default fillProgression;
