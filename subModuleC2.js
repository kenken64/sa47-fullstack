module.exports = function(a,b){
    console.log(a);
    console.log(b);
    console.log(sayHelloInEnglish(a, b));
    function  sayHelloInEnglish(a, b){
        return `C - Hello ${a} ${b}`;
    }
    function sayHelloInMalay(){
        return 'C- Apa Khabar!';
    }

    function sayHelloInChinese(){
        return 'C- Ni Hao!';
    }
};