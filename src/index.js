import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', userName);
  console.log(description);
  for (let n = 0; n < numberOfRounds; n += 1) {
    const [question, answer] = gameData();
    let result = false;
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
      result = true;
    }
    if (result === false) {
      console.log("'%s' is wrong answer ;(. Correct answer was '%s'.", userAnswer, answer);
      return console.log("Let's try again, %s!", userName);
    }
  }
  return console.log('Congratulations, %s!', userName);
};

export default startGame;
