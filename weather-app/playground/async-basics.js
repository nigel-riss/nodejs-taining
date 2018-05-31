console.log('Starting app');


setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Zero timeout');
}, 0);

console.log('Finishing app');

// let add = (a, b) => {
//     let total = a + b;

//     return total;
// };

// let res = add(3, 8);

// console.log(res);