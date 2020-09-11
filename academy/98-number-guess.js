'use strict';

const chalk = require(`chalk`);
const readline = require(`readline`);

const welcomeText = chalk.hex(`#00ff00`)(`Привет, я Кекс. Мне нравится загадывать числа.
Всё честно: вы называете максимальное число, а я загадаю случайное
число в этом диапазоне. Попробуйте его угадать. Количество попыток
неограничено.`);

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomNumber = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shosWinMessage = (secretNumber) => {
  console.log(`
    Ура! Вы угадали число.
    Я действительно загадал ${secretNumber}.
  `);

  readlineInterface.close();
};

const checkAnswer = (secretNumber) => {
  readlineInterface.question(`Ваш ответ: `, (inputNumber) => {
    const userNumber = Number.parseInt(inputNumber, 10);

    if (secretNumber === userNumber) {
      return shosWinMessage(secretNumber);
    }

    console.log(`Промазал. Попробуй ещё.`);

    checkAnswer(secretNumber);
  });
};

const startGame = () => {
  console.log(chalk.bold(welcomeText));

  readlineInterface.question(`Максимальное число: `, (maxNumber) => {
    const myNumber = getRandomNumber(0, Number.parseInt(maxNumber, 10));
    checkAnswer(myNumber);
  });
};

startGame();

// https://github.com/SBoudrias/Inquirer.js#examples
