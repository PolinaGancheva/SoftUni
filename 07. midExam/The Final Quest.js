// function solve(input){
//     let sentence = input.shift().split(' ');
//     for(let i = 0; i <= input.length-1; i++){
//         let instruction = input[i].split(' ');
//         let command = instruction[0];
       
//             if(command === 'Delete'){
//                 let index = Number(instruction[1]) +1;
//                 if(index > 0 && index < sentence.length){
//                     sentence.splice(index,1);
//                 }
            
//             }
//             if(command === 'Swap'){
//                 let firstWord = instruction[1];
//                 let secondWord = instruction[2];
//                 let indexFirstWord = sentence.indexOf(firstWord);
//                 let indexSecondWord = sentence.indexOf(secondWord);
//                if( indexFirstWord !== -1 && indexSecondWord !== -1){
//                 sentence.splice(indexFirstWord,1);
//                 sentence.splice(indexFirstWord,0,secondWord);
//                 sentence.splice(indexSecondWord,1);
//                 sentence.splice(indexSecondWord,0,firstWord);
//                }
               
//             }
//             if(command === 'Put'){
//                 let word = instruction[1];
//                 let index = Number(instruction[2])-1;
//                 if(index > 0 && index <= sentence.length){
//                 sentence.splice(index,0,word);
//                 }
//             }
//             if(command === 'Sort'){
//                 sentence.sort((a, b) => b.localeCompare(a));
//             }
//             if(command === 'Replace'){
//                 let firstWord = instruction[1];
//                 let secondWord = instruction[2];
//                 let indexSecondWord = sentence.indexOf(secondWord);
//                 if(indexSecondWord !== -1){
//                     sentence.splice(indexSecondWord,1);
//                     sentence.splice(indexSecondWord,0,firstWord);
//             }
//     }
//         if(command === 'Stop'){
//             break;
//         }
// } 
//     console.log(sentence.join(' '));

// }
function solve(params) {
    params.pop();
    let collection = params.shift().split(" ");
   
    for (let param of params) {
      let tokens = param.split(" ");
      let command = tokens[0];
   
      if (command === "Delete") {
        let index = Number(tokens[1]);
        if (index >= 0 && index < collection.length) {
          collection.splice(index + 1, 1);
        }
      } else if (command === "Swap") {
        let word1 = tokens[1];
        let word2 = tokens[2];
        for (let i = 0; i < collection.length; i++) {
          if (collection[i] === word1) {
            collection[i] = word2;
          } else if (collection[i] === word2) {
            collection[i] = word1;
          }
        }
      } else if (command === "Put") {
        let word = tokens[1];
        let index = Number(tokens[2]);
        if (index >= 0 && index < collection.length) {
          collection.splice(index - 1, 0, word);
        }
      } else if (command === "Sort") {
        collection.sort((a, b) => b - a);
      } else if (command === "Replace") {
        let word1 = tokens[1];
        let word2 = tokens[2];
        for (let i = 0; i < collection.length; i++) {
          if (collection[i] === word2) {
            collection[i] = word1;
          }
        }
      }
    }
    console.log(collection.join(" "));
  }
solve([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Sort',
    'Stop'
  ] )
  solve([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Sort',
    'Stop',
    ''
  ]
  )