import readlineSync from 'readline-sync';

const randomNumber = () => {
  const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  return number;
};

const base = (taskName, questionAnswerArray) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
  console.log(taskName);
  for (let n = 0; n < 6;) {
    let result = false;
    const task = questionAnswerArray[n];
    const realAnswer = questionAnswerArray[n + 1];
    console.log('Question:', task);
    const answer = readlineSync.question('Your answer: ');
    if (answer === realAnswer.toString()) {
      console.log('Correct!');
      result = true;
    } else {
      console.log("'%s' is wrong answer ;(. Correct answer was '%s'.", answer, realAnswer);
    }
    if (result === true) {
      n += 2;
      if (n === 6) {
        console.log('Congratulations, %s!', name);
      }
    } else {
      console.log("Let's try again, %s!", name);
      break;
    }
  }
};

export { base, randomNumber };
