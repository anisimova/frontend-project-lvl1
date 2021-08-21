import readlineSync from 'readline-sync';

const askingName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
};

export default askingName;
