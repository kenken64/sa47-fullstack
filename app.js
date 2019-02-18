console.log("Hello World 2");

var x = 1;
console.log(typeof(x));
x = " Kenneth ";
console.log(typeof(x));
console.log(x);

function make1(x, y){
    console.log(x);
}

function make2(x, y, z){
    make1(x+1);
    console.log(typeof(x));
    if(x == null){
        console.log("x is null !");
    }

    if(y == null){
        console.log("y is null and undefined !");
    }

    if(typeof(y) === 'undefined'){
        console.log("y is undefined !");
    }
    console.log(y);
    console.log(z);
}

make2(null,null,100);
make2('xxx',null,100);
make2('aaa');


function make3(fn1){
    console.log(fn1);
    fn1();
}

function fn1(){
    console.log("Hello World");
}
make3(fn1);

str1 = "Apple";
console.log(str1);
str2 = 'An ' + str1

console.log(str2);
str2 = `
        xxx An ${str1}
        \n test gello !
       `
console.log(str2);

var x  = true;
var yy = false;

if(x){
    console.log("true")
}

if(!yy){
    console.log("false");
}

g_x = 100;
function make5(){
    let l_x = 10;
    console.log(`x inside > ${x}`);
}

make5();
console.log(`x from outside > ${x}`);

var fruit = ['Apple', false, 'Orange', 1 , 'durian'];
console.log(fruit[0]);
console.log(fruit[1]);
fruit.push('PineApple');
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift(1);
console.log(fruit);
fruit.unshift('Watermelon');
console.log(fruit);
fruit.shift();

console.log(fruit);

fruit.sort();
console.log(fruit);

var numbers1 = [4,7,8,9,1];
numbers1.sort(function(a,b){
    console.log("a " + a);
    console.log("b " + b);
    console.log(b-a);
    return b - a;
})
console.log(numbers1);
var numbers1 = [4,7,8,9,1];
var numbers2 = [4,77,81,9,1];

result = numbers1.concat(numbers2);
console.log(result);
//result.sort();
result.sort(function(a,b){
    return b - a;
})
console.log(result);

var person = {
    firstName : 'Kenneth',
    lastName: "Phang",
    age: 18,
    'my house': 'amk',
    gender: 'M',
    postalCode: 566344
}

console.log(person.age);
console.log(person.gender);
console.log(person['age']);
console.log(person['my house']);
person.age = 40;
console.log(person.age);
console.log(person.postalCode);
delete person.postalCode;
console.log(person.postalCode);

// anonymous aka arrow function
setTimeout(()=>{
    console.log(1+1);
}, 5000);

// anonymous fn
setTimeout(function(){
    console.log(1+1);
}, 5000);

// name as x
function namedx(){
    console.log(1+1);
}

setTimeout(namedx, 5000);

/*
setInterval(()=>{
    console.log("setInterval >" + 1+1);
}, 2000)*/

function throwError(){
    throw new Error('This is an error!');
}

try {
    throwError();
}catch(e){
    console.log(e);
}finally{
    console.log("finally execute");
}

var x5 = 4;

switch(x5){
    case 1: 
        console.log('1');
        break;
    case 2: 
        console.log('2');
        break;
    case 4: 
        console.log('4');
        break;
        
    default: 
        console.log("this is default switch");
}

var yy = 0;
while(yy <= 5){
    console.log(yy);
    yy++;
}

var t = [1,3,4,5,8,9];

t.forEach((result, index)=>{
    console.log("Result > " + result);
    console.log("Index > " +index);
})

for(var i=0; i < t.length; i++){
    console.log(t[i]);
}

var months = ['Jan', 'feb', 'Mar', 'Apr', 'May'];
console.log(months);
// first param remove from the front , second param is remove from behind
// - one 
copyMonths = months.slice(1, 4);
console.log(">>> " + copyMonths);
// index, deletecount, value
months.splice(4,2,'June', 'July');
console.log(months);

var person = {
    firstName : 'Kenneth',
    lastName: "Phang",
    age: 18,
    'my house': 'amk',
    gender: 'M',
    postalCode: 566344
}

function Person2(firstname, lastname, age, gender){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

var p2 = new Person2('Kenneth', 'Phang', 42, 'M');
console.log(p2.age);

class Animal {
    constructor(noOfLegs, colour, shape){
        this.noOfLegs = noOfLegs;
        this.colour = colour;
        this.shape = shape;
    }

    getAdditionalNoOfLegs(){
        return this.noOfLegs +2;
    }
}

var c = new Animal(4, 'brown', 'dog');
console.log(c.noOfLegs);
console.log(c.colour);
console.log(c.getAdditionalNoOfLegs());


class Cat extends Animal {
    constructor(noOfLegs, colour, shape){
        super(noOfLegs, colour,shape);
    }

    getBlackColour(){
        return 'black';
    }
}

var cc = new Cat(4, 'red', 'elephant');
console.log("additional legs for cat > " + cc.getAdditionalNoOfLegs());

const words = ['spray', 'comb', 'limit', 'chocolate', 'coffee'];

const longwords = words.filter(word=> word.length > 6);
console.log(longwords);

const total = [1, 4, 5, 6].reduce((sum, value)=> sum+value, 0);
console.log(total); //17

// http call
Promise.resolve('Success').then(function(value) {
    console.log(value); // "Success"
}, function(value) {
    // not called
});
