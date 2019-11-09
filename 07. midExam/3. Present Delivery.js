function solve(arr){
    let houseMembers = arr.shift().split('@').map(Number);
    //console.log(houseMembers);
    arr.pop();
    let lastPositionIndex = 0;
    let housesCount = 0;
    arr.forEach((line) => {
        let [command, length] = line.split(' ');
        length = Number(length);
            lastPositionIndex += length;
                while(lastPositionIndex > houseMembers.length-1){
                    lastPositionIndex -= houseMembers.length;
                }
            if(houseMembers[lastPositionIndex] === 0){
              console.log(`House ${lastPositionIndex} will have a Merry Christmas.`);
            }
            else if (houseMembers[lastPositionIndex] > 2){
                houseMembers[lastPositionIndex] -= 2;
            }
         
            else{
                houseMembers[lastPositionIndex] = 0;
            }
    });
    console.log(`Santa\'s last position was ${lastPositionIndex}.`);
    if(houseMembers.reduce((accumulator, currentValue) => accumulator + currentValue) === 0){
        console.log(`Mission was successful.`);
    }
    else{
        for(let i = 0; i < houseMembers.length; i++){
            if(houseMembers[i] !== 0){
                housesCount++;  
            }
        }
        console.log(`Santa has failed ${housesCount} houses.`);
    }
}
solve([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!' ]);
solve([
    '2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!'
  ]
  )