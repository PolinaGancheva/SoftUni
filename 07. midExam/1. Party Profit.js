function solve(arr){
    let partySize = Number(arr.shift());
    let days = Number(arr.shift());
    let companionsCount = partySize;
    let coins = 0;
    for(let i = 1; i <= days; i++){
        if(i % 10 === 0){
            companionsCount -= 2;
        }
        if(i % 15 === 0){
            companionsCount += 5;
        }
        coins += 50;
        coins -= 2* companionsCount;
        if(i % 3 === 0){
            coins -= 3 * companionsCount;
        }
        if(i % 5 === 0){
            coins += 20 * companionsCount;
            if(i % 3 === 0){
                coins -= 2 * companionsCount;
            }
        }
      
      
    }
    console.log(`${companionsCount} companions received ${parseInt(coins/companionsCount)} coins each.`)
}
//solve([ '3', '5' ]);
solve([ '15', '30' ]);