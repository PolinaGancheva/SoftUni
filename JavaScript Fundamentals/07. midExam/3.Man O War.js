function solve(arr){
    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warShipStatus = arr.shift().split('>').map(Number);
    let maxHealthCapacity = Number(arr.shift());
    let isSank = false;
    let result = '';
   for(let j = 0; j < arr.length; j++) {
        let tokens = arr[j].split(' ');
        let command = tokens[0];
        if(command === 'Fire'){
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if(index >= 0 && index < warShipStatus.length){
                warShipStatus[index] -= damage;
                if(warShipStatus[index] <= 0){
                   result =`You won! The enemy ship has sunken.`;
                    isSank = true;
                     break;
                }
            }

        }
        else if(command === 'Defend'){
            let startIndex = Number(tokens[1]);
            let endtIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);
            if(startIndex >= 0 && endtIndex > 0 && startIndex < pirateShipStatus.length && endtIndex < pirateShipStatus.length){
                for(let i = startIndex; i <= endtIndex; i++){
                    pirateShipStatus[i] -= damage;
                    if(pirateShipStatus[i] <= 0){
                        result = `You lost! The pirate ship has sunken.`;
                        isSank = true;
                        break;
                    }
                }
               
            }
        }
        else if(command === 'Repair'){
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);
            if(index >= 0 && index < pirateShipStatus.length){
                pirateShipStatus[index] += health;
                if(pirateShipStatus[index] > maxHealthCapacity){
                    pirateShipStatus[index] = maxHealthCapacity;
                }
            }
        }
        else if(command === 'Status'){
            let count = 0;
            for(let i = 0; i < pirateShipStatus.length; i++){
                if(pirateShipStatus[i] < 0.2* maxHealthCapacity){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
   
    if(!isSank){
        let pirateShipSum = pirateShipStatus.reduce((acc,cur) => +acc + +cur);
        let warshipSum = warShipStatus.reduce((acc,cur) => +acc + +cur);
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
    else{
        console.log(result);
    }
}
// solve([
//   '12>13>11>20>66',
//   '12>22>33>44>55>32>18',
//   '70',
//   'Fire 2 11',
//   'Fire 8 100',
//   'Defend 3 6 11',
//   'Defend 0 3 5',
//   'Repair 1 33',
//   'Status',
//   'Retire'
// ]);
solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ]
  )