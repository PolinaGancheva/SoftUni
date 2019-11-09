function solve(arr){
    let allowedQuantity = Number(arr[0]);
    let daysUntilChristmas = Number(arr[1]);
    let ornamentalSetPrice = 2;
    let treeSkirtPrice = 5;
    let treeGerlandPrice = 3;
    let treeLightsPrice = 15;
    let budget = 0;
    let totalSpirit = 0;
    for(let i = 1; i <= daysUntilChristmas; i++){
        if(i % 11 === 0){
            allowedQuantity += 2;
        }
        if(i % 2 === 0){
            budget += ornamentalSetPrice * allowedQuantity;
            totalSpirit += 5;
        }  
         if(i % 3 === 0){
            budget += treeSkirtPrice * allowedQuantity;
            budget += treeGerlandPrice * allowedQuantity;
            totalSpirit += 13;
        } 
        if(i % 5 === 0){
            budget += treeLightsPrice * allowedQuantity;
            totalSpirit += 17;
            if(i % 3 === 0){
                totalSpirit += 30;
            }
        } 
         if(i % 10 === 0){
            totalSpirit -= 20;
            budget += treeSkirtPrice + treeGerlandPrice + treeLightsPrice;
        } 
         
        if(i === daysUntilChristmas){
            if(i % 10 === 0){
                totalSpirit -= 30;
            }
        }
        
    }
    console.log(`Total cost: ${budget}`);
    console.log(`Total spirit: ${totalSpirit}`);
}
solve([ '1', '7' ]);
solve([ '3', '20' ]);