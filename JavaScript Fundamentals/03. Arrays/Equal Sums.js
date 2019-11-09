function solve(arr){
 let indexOfEl = -1;
    for(let i = 0; i < arr.length; i++){
      let leftSum = 0;
      let rightSum = 0;
        for( let j = i - 1; j >= 0; j--){
            leftSum += arr[j];
        }
        for( let k = i + 1; k < arr.length; k++){
            rightSum += arr[k];
        }
        if(rightSum === leftSum){
            indexOfEl = i;
        }
    }
    if(indexOfEl !== -1){
        console.log(indexOfEl);
    }
    else{
        console.log('no');
    }
  
}
solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1])