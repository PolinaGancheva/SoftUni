function solve(input){

    let sum = input[0].reduce((a,b) => a + b);
    let isMagic = true;
    for(let i = 0; i < input.length; i++){
        let rowSum = input[i].reduce((a,b) => a + b);;
        let columnSum = 0;
        for(let j = 0; j < input.length; j++){
            columnSum += input[j][i];
            
        }
        if(rowSum !== columnSum || rowSum !== sum || columnSum !== sum){
            isMagic = false;
        }
    }
    return isMagic;
}
console.log(solve([ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 5, 5, 5 ] ]

))