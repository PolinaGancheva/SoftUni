function solve(num){
    let devider = 0;
    if(num % 10 === 0){
        devider = 10;
    }
    else if(num % 7 === 0){
        devider = 7;
    }
    else if(num % 6 === 0){
        devider = 6;
    }
    else if(num % 3 === 0){
        devider = 3;
    }
    else if(num % 2 === 0){
        devider = 2;
    }
    if(devider != 0){
        console.log(`The number is divisible by ${devider}`);
    }
   
    else{
        console.log('Not divisible');
    }
   
}
solve(30)