import { base, randomNumber } from '../index.js';

const isPrimeNumber = () => {
  const taskName = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionAnswerArray = [];
  for (let i = 0; i < 6; i += 2) {
    const num = randomNumber(100);
    questionAnswerArray[i] = num;
    const isPrime = (n) => {
      for (let k = 2; k < n; k += 1) {
        if (num % k === 0) return 'no';
      }
      return 'yes';
    };
    questionAnswerArray[i + 1] = isPrime(num);
  }
  base(taskName, questionAnswerArray);
};

export default isPrimeNumber;
