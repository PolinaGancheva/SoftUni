function solve(arr){
    let cards = arr.shift().split(':');
    let newDeck = [];
    arr.forEach((line) => {
        let tokens = line.split(' ');
        let command = tokens.shift();
        if(command === 'Add'){
            let card = tokens.shift();
            if(cards.includes(card)){
                newDeck.push(card);
            }
            else{
                console.log(`Card not found.`)
            }
        }
        else if(command === 'Insert'){
            let card = tokens.shift();
            let index = Number(tokens.shift());
            if(!cards.includes(card) || index < 0 || index > newDeck.length){
                console.log(`Error!`);
            }
            else{
                newDeck.splice(index,0,card);
            }
        }
        else if(command === 'Remove'){
            let card = tokens.shift();
            if(!newDeck.includes(card)){
                console.log("Card not found.");
            }
            else{
                newDeck.splice(newDeck.indexOf(card),1);
            }
        }
        else if(command === 'Swap'){
            let firstCard = tokens.shift();
            let secondtCard = tokens.shift();
            let storeFirstIndex = newDeck.indexOf(firstCard);
            let storeSecondIndex = newDeck.indexOf(secondtCard);
            if(newDeck.includes(firstCard) && newDeck.includes(secondtCard)){
                newDeck[storeFirstIndex] = secondtCard;
                newDeck[storeSecondIndex] = firstCard;
            }
            
        }
        else if(command === 'Shuffle'){
            newDeck = newDeck.reverse();
        }
    });
    console.log(newDeck.join(' '));
}
// solve([
//     'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
//     'Add Moonfire',
//     'Add Pounce',
//     'Add Bite',
//     'Add Wrath',
//     'Insert Claw 0',
//     'Swap Claw Moonfire',
//     'Remove Bite',
//     'Shuffle deck',
//     'Ready'
//   ]);
  solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
  ])
  solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Remove Pounce',
    'Add Pounce',
    'Remove Pounce',
    'Add Wrath',
    'Ready'
  ])