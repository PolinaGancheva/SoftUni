function solve(str){
        let rooms = str[0].split('|');
        let health = 100;
        let coins = 0;
        let healthDiff = 0;
        for(let i = 0; i < rooms.length; i++){
             let firstAndSecond = rooms[i].split(' ');
            
             if(firstAndSecond[0] === 'potion'){
                healthDiff = 100 - health; 
                if(firstAndSecond[1] > healthDiff){
                    console.log(`You healed for ${healthDiff} hp.`);
                    health += healthDiff;
                }
                else{
                    console.log(`You healed for ${firstAndSecond[1]} hp.`);
                    health += Number(firstAndSecond[1]);
                }
                if(health <= 100){
                    console.log(`Current health: ${health} hp.`); 
                } 
               else{
                    console.log(`Current health: 100 hp.`);
                }
             }
            else if(firstAndSecond[0] === 'chest'){
                coins += Number(firstAndSecond[1]);
                console.log(`You found ${firstAndSecond[1]} coins.`);
            }
            else{
                health -= firstAndSecond[1];
                if(health > 0){
                    console.log(`You slayed ${firstAndSecond[0]}.`)
                }
                if(health <= 0){
                    console.log(`You died! Killed by ${firstAndSecond[0]}.`);
                    console.log(`Best room: ${i+1}`);
                    break;
                }
            }
            if(i == rooms.length-1 && health > 0){
                console.log(`You've made it!`);
                console.log(`Coins: ${coins}`); 
                console.log(`Health: ${health}`);
            }
            }
            
 }
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
//solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])