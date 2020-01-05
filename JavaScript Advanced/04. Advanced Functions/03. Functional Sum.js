let add = (function(){
    let sum = 0;
  return function add(arg){
       sum += arg;
       add.toString = function (){
            return sum;
       }
        return add;
    }
}())
// function add(num) {
//     let sum = num;

//     function calc(num2) {
//         sum += num2;
//         return calc;
//     }

//     calc.toString = function() { return sum };
//     return calc;
// }
console.log((add(1)(6)(-3)).toString());