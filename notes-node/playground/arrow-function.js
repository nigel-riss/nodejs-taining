let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Yuriy',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 'hello');
// user.sayHiAlt(1, 'hello');