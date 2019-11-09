function solve(arr){
    let loot = arr.shift().split('|');
    arr.forEach((line) => {
        let tokens = line.split(' ');
        let command = tokens.shift();
        if(command === 'Loot'){
            for(let i = 0; i < tokens.length;i++){
                if(!loot.includes(tokens[i])){
                    loot.unshift(tokens[i]);
                }
            }
        }
        else if(command === 'Drop'){
            let index = Number(tokens[0]);
            if(index >= 0 && index < loot.length){
               let dropped = loot.splice(index,1).join();
               loot.push(dropped);
            }
        }
        else if(command === 'Steal'){
            let count = Number(tokens[0]);
            let index = loot.length-count;
            if(count > loot.length){
                index = 0;
            }
            let stolen = loot.splice(index,count).join(', ');
            console.log(stolen);
        }
    });
   
    if(loot.length !== 0){
        let averageGain = loot.map(x => x.length);
        let sum = (averageGain.reduce((acc,cur) => acc + cur))/loot.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`)
    }
    else if(loot.length === 0){
        console.log(`Failed treasure hunt.`);
    }
}
solve([
  'Gold|Silver|Bronze|Medallion|Cup',
  'Loot Wood Gold Coins',
  'Loot Silver Pistol',
  'Drop 3',
  'Steal 3',
  'Yohoho!'
])
// solve([
//     'Diamonds|Silver|Shotgun|Gold',
//     'Loot Silver Medals Coal',
//     'Drop -1',
//     'Drop 1',
//     'Steal 2',
//     'Yohoho!'
//   ])