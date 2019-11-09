function solve(num){
    let sum = 0;
    let numStr = num.toString();
    for(let i = 0; i <= numStr.length-1; i++){
        sum += Number(numStr[i]);
    }
    console.log(sum);
}
solve(245678);