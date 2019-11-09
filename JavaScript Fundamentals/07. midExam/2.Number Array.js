function solve(input){
    let arr = input.shift();
    arr = arr.split(' ').map(Number);
    let result = [];
    for(let i = 0; i < input.length; i++){
        let instruction = input[i].split(' ');
        let command = instruction[0];
        if(command === 'Switch'){
            let index = Number(instruction[1]);
            if(arr[index] >= 0 && arr[index] <= arr.length){
                    arr[index] = -1*(arr[index]);
            }
        }
        if(command === 'Change'){
            let index = Number(instruction[1]);
            let value = Number(instruction[2]);
            if(arr[index] >= 0 && arr[index] <= arr.length){
                arr[index] = value;
            }
        }
        if(command === 'Sum'){
            let value = instruction[1];
            if(value === 'Negative'){
                let negativeSum = 0;
                for(let j = 0; j < arr.length; j++){
                    if(arr[j] < 0){
                        negativeSum += arr[j];
                    }
                }
                console.log(negativeSum);
               
            }
            else if(value === 'Positive'){
                let positiveSum = 0 ;
                for(let j = 0; j < arr.length; j++){
                    if(arr[j] >= 0){
                        positiveSum += arr[j];
                    }
                }
                console.log(positiveSum);
            }
            else if(value === 'All'){
                let sum = 0;
                for(let j = 0; j < arr.length; j++){
                        sum += arr[j];
                }
                console.log(sum);
            }
        }
        if(command === 'End'){
            break;
        }
        
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] >= 0){
            result.push(arr[j]);
        }
    }
  console.log(result.join(' '));
    
}
solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ]
);
// solve([
//     '1 2 3 4 5 4 3 2 1 0',
//     'Switch -4',
//     'Change 13 0',
//     'Switch 0',
//     'Sum All',
//     'End'
//   ])