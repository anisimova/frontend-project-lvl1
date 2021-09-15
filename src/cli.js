import readlineSync from 'readline-sync';

const askingName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
};

export default askingName;
