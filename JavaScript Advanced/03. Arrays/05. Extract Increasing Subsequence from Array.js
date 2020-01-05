function solve(input){
   // let result = input.slice(0,1);
    // for(let i = 1; i < input.length; i++){
    //     if(input[i] >= result[result.length-1]){
    //         result.push(input[i])
    //     }
    // }

    let result = input.reduce((acc,curr,index,arr) => {
        if(curr > Math.max(...acc)){
            acc.push(curr);
        }
        return acc;
    },[])
     return result.join('\n');
}
console.log(solve([
   1, 3, 8,  4, 10,
  12, 3, 2, 24
]
))