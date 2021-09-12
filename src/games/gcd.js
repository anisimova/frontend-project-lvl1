import { base, randomNumber } from '../index.js';

const findGCD = () => {
  const taskName = 'Find the greatest common divisor of given numbers.';
  const questionAnswerArray = [];
  for (let i = 0; i < 6; i += 2) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    questionAnswerArray[i] = `${firstNumber}  ${secondNumber}`;
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
    questionAnswerArray[i + 1] = gcd(firstNumber, secondNumber);
  }
  base(taskName, questionAnswerArray);
};

export default findGCD;
