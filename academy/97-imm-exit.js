'use strict';

const MAX_COUNT = 10;

console.log(`Эта программа завершится, когда счётчик достигнет 10`);
let counter = 0;

while (true) {
  counter++;
  console.log(counter)

  if (counter === MAX_COUNT) {
    console.log(process.versions);
    process.exit();
  }

};
// https://nodejs.org/api/process.html#process_exit_codes
