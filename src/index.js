import readlineSync from 'readline-sync';

const generatingQuestionAnswer = (task, realAnswer) => {
  console.log('Question:', task);
  const answer = readlineSync.question('Your answer: ');
  if (answer === realAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log("'%s' is wrong answer ;(. Correct answer was '%s'.", answer, realAnswer);
  return false;
};

const startGame = (taskName, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
  console.log(taskName);
  for (let n = 0; n < 3; n += 1) {
    const task = gameData[n][0];
    const realAnswer = gameData[n][1];
    const result = generatingQuestionAnswer(task, realAnswer);
    if (result === false) {
      return console.log("Let's try again, %s!", name);
    }
  }
  return console.log('Congratulations, %s!', name);
};

export default startGame;
