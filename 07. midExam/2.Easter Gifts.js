function solve(arr){
    let gifts = arr.shift();
    gifts = gifts.split(' ');
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let instructions = arr[i].split(' ');
        let command = instructions[0];
        if(command === 'OutOfStock'){
            let gift = instructions[1];
            if(gifts.includes(gift)){
                for(let j = 0; j < gifts.length; j++){
                    if(gifts[j] === gift){
                        gifts[j] = 'None';
                    }
                }
            }
        }
        else if(command === 'Required'){
            let gift = instructions[1];
            let index = Number(instructions[2]);
            if(index >=0 && index <= gifts.length){
                gifts.splice(index, 1, gift);
            }
        }
        else if(command === 'JustInCase'){
            let gift = instructions[1];
            gifts.splice(gifts.length-1, 1, gift);
        }
    }
    for(let j = 0; j < gifts.length; j++){
        if(gifts[j] !== 'None'){
           result.push(gifts[j] )
        }
    }
    console.log(result.join(' '));
}
// solve([
//   'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
//   'OutOfStock Eggs',
//   'Required Spoon 2',
//   'JustInCase ChocolateEgg',
//   'No Money'
// ]
// );
solve([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
  ])