function solve(arr){
    let money = 0;
    let boughtBitcoins = 0;
    let day = 0;
    let firstDay = 0;
    for(let i = 0; i <= arr.length-1; i++){
        day++;
        let gramGold = arr[i];
        if(day % 3 ===0 ){
         gramGold -= 0.3*gramGold;
        }
        
        money += gramGold*67.51;
        while(money >= 11949.16){
            money -= 11949.16;
            boughtBitcoins++;
            if(boughtBitcoins===1){
                firstDay = day;
            }
          
        }
       
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if(firstDay!=0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve([100,200,300]);
solve([3124.15, 504.212, 2511.124]);