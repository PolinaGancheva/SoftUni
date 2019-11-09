function solve(lostFights, helmetPrice,swordPrice,shieldPrice,armorPrice){
    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let brokenArmor = 0;
    let expenses = 0;
   
    for(let i = 1; i<= lostFights; i++){
        let armorBrake = false;
        if(i % 2 === 0){
            brokenHelmetCount++;
        }
        if(i % 3 === 0){
            brokenSwordCount++;
        }
        if(i % 3 === 0 && i % 2 === 0){
            brokenShieldCount++;
            armorBrake = true;
        }
        if(armorBrake && brokenShieldCount % 2 === 0 && brokenShieldCount != 0){
            brokenArmor++;
        }
}
    expenses = brokenHelmetCount*helmetPrice + brokenSwordCount*swordPrice + brokenShieldCount*shieldPrice+ brokenArmor*armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
//solve(7,2,3,4,5);
solve(23,12.5,21.5,40,200)