function solve(group,type,day){
    let price = 0;
    if(type === 'Students'){
        if(day == 'Friday'){
            price += 8.45;
        }
        else if(day == 'Saturday'){
            price += 9.8;
        }
        else if(day == 'Sunday'){
            price += 10.46;
        }
        if(group >= 30){
            price -= 0.15 * price;
        }
    }
   else if(type === 'Business'){
        if(day == 'Friday'){
            price += 10.9;
        }
        else if(day == 'Saturday'){
            price += 15.6;
        }
        else if(day == 'Sunday'){
            price += 16;
        }
        if(group >= 100){
           group -=10;
        }
    }
   else if(type === 'Regular'){
        if(day == 'Friday'){
            price += 15;
        }
        else if(day == 'Saturday'){
            price +=20;
        }
        else if(day == 'Sunday'){
            price += 22.5;
        }
        if(group >= 10 && group <= 20){
            price -= 0.05 * price;
        }
    }
   console.log(`Total price: ${(price*group).toFixed(2)}`);
}
solve(30,"Students", "Sunday")