// flat import
const subModuleA = require('./subModuleA');
console.log(subModuleA);

// flat import invoke functions inside the sub module
// individual exports functions
const subModuleB = require('./subModuleB');
console.log(subModuleB.sayHelloInEnglish());
console.log(subModuleB.sayHelloInMalay());
console.log(subModuleB.sayHelloInChinese());

// import sub module within a export block
const subModuleC = require('./subModuleC');
console.log(subModuleC.sayHelloInEnglish());
console.log(subModuleC.sayHelloInMalay());
console.log(subModuleC.sayHelloInChinese());

// pass in value from the require of a submodule
const subModuleC2 = require('./subModuleC2')('Kenneth', 'Phang');

// import classes from submodule.
const subModuleC3 = require('./subModuleC3');
const apple = new subModuleC3.Apple(3);
const orange = new subModuleC3.Orange(5.6);

apple.peel();
orange.peel();

console.log(apple.getPrice());

const subModuleC4 = require('./subModuleC4/subModuleC4');
const apple2 = new subModuleC4.Apple(2);
const orange2 = new subModuleC4.Orange(2.6);

apple2.peel();
orange2.peel();

console.log(apple2.getPrice());