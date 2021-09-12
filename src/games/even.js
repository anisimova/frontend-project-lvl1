import { base, randomNumber } from '../index.js';

const checkingRandomNumbers = () => {
  const taskName = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerArray = [];
  for (let i = 0; i < 6; i += 2) {
    questionAnswerArray[i] = randomNumber(100);
    if (questionAnswerArray[i] % 2 === 0) {
      questionAnswerArray[i + 1] = 'yes';
    } else {
      questionAnswerArray[i + 1] = 'no';
    }
  }
  base(taskName, questionAnswerArray);
};

export default checkingRandomNumbers;
