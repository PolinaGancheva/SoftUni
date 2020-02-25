function getFibonator(){
    let previousElement = 0;
    let currentElement = 1;
    return function(){
        const result = previousElement + currentElement;
        previousElement = currentElement;
        currentElement = result;
        return previousElement;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 
