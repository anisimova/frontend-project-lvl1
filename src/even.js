import readlineSync from 'readline-sync';

const qaRandomNumber = (name) => {
  const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  console.log('Question:', randomNumber);
  const answer = readlineSync.question('Your answer: ');
  const yes = 'yes';
  const no = 'no';
  if ((answer === yes && randomNumber % 2 === 0) || (answer === no && randomNumber % 2 === 1)) {
    console.log('Correct!');
    return true;
  }
  if (randomNumber % 2 === 0) {
    console.log("'%s' is wrong answer ;(. Correct answer was 'yes'.", answer);
  } else {
    console.log("'%s' is wrong answer ;(. Correct answer was 'no'.", answer);
  }
  console.log("Let's try again, %s", name);
  return false;
};

const checkingRandomNumbers = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let n = 0; n < 3;) {
    const result = qaRandomNumber(name);
    if (result === true) {
      n += 1;
      if (n === 3) {
        console.log('Congratulations, %s!', name);
      }
    } else {
      break;
    }
  }
};

export default checkingRandomNumbers;
