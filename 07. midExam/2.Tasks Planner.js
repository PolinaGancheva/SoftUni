function solve(arr){
    let tasks = arr.shift();
    tasks = tasks.split(' ').map(Number);
    let incomplete = [];
  
    for(let i = 0 ; i < arr.length; i++){
        let instruction = arr[i].split(' ');
        let command = instruction[0];
        if(command === 'Complete'){
            let index = instruction[1];
            if(index >= 0 && index <= tasks.length){
                tasks.splice(index,1,0);
            }
        }
        else if(command === 'Change'){
            let index = Number(instruction[1]);
            let time = Number(instruction[2]);
            if(index >= 0 && index <= tasks.length){
                tasks.splice(index,1,time);
            }
        }
        else if(command === 'Drop'){
            let index = Number(instruction[1]);
            if(index >= 0 && index <= tasks.length){
                tasks.splice(index,1,-1);
            }
        }
        else if(command === 'Count'){
            let specif = instruction[1];
            if(specif === 'Completed'){
                let result = 0;
                for(let j = 0; j < tasks.length; j++){
                    if(tasks[j] === 0){
                        result++;
                    }
                }
                console.log(result);
            }
            else if(specif === 'Incomplete'){
                let result = 0;
                for(let j = 0; j < tasks.length; j++){
                    if(tasks[j] !== 0 && tasks[j] > 0){
                        result ++;
                    }
                }
                console.log(result);
            }
            else if(specif === 'Dropped'){
                let result = 0;
                for(let j = 0; j < tasks.length; j++){
                    if(tasks[j] < 0){
                       result++
                    }
                }
                console.log(result);
            }
        }
    }
    for(let j = 0; j < tasks.length; j++){
        if(tasks[j] !== 0 && tasks[j] > 0){
            incomplete.push(tasks[j]);
        }
    }
    console.log(incomplete.join(' '));
}
// solve([
//   '1 -1 2 3 4 5',
//   'Complete 4',
//   'Change 0 4',
//   'Drop 3',
//   'Count Dropped',
//   'End'
// ]
// )
solve([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
  ])