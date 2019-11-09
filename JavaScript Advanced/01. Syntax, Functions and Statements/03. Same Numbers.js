function solve(num){
    num = [...num+''];
    let bool = true;
    let sum = num.reduce((acc,curr) => +acc + +curr);
    for(let i = 1; i < num.length; i++){
        if(num[i] === num[i-1]){
            bool = true;
        }
        else{
            bool = false;
        }
    }
    console.log(bool);
    console.log(sum);
}
solve(2222222);
solve(1234);
solve(11);