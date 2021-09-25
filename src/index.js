import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  console.log(description);
  for (let n = 0; n < numberOfRounds; n += 1) {
    const [question, answer] = gameData();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log("'%s' is wrong answer ;(. Correct answer was '%s'.", userAnswer, answer);
      console.log("Let's try again, %s!", userName);
      return false;
    }
  }
  console.log('Congratulations, %s!', userName);
  return true;
};

export default startGame;
