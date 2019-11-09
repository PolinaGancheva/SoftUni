function solve(input){
    let sortedArr = input.sort((a,b) => b-a);
    let len = input.length;
    let outputArr = [];
    for(let i = 0; i < len/2; i++){
        let biggest = 0;
        let smallest = 0;
         biggest = sortedArr.shift();
         outputArr.push(biggest);
    
         smallest = sortedArr.pop();
         outputArr.push(smallest);

    }
    
    console.log(outputArr.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);