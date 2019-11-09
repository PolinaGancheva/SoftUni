function solve(arr){
    let totalMoney = 0;
    arr.forEach((order) => {
       let tokens = order.split(', ');
       let price = 0;
            let coins = Number(tokens[0]);
            let typeOfDrink = tokens[1];
            if(typeOfDrink === 'coffee'){
                let typeOfCoffee = tokens[2];
                if(typeOfCoffee === 'caffeine'){
                    price = 0.8;
                }
                else if(typeOfCoffee === 'decaf'){
                    price = 0.9;
                }
            }
            else if(typeOfDrink === 'tea'){
                price = 0.8;
            }
            if(tokens.includes('milk')){
                price += Math.round(0.1 * price * 10)/10;
            }
            let sugar = tokens[tokens.length-1];
            if(sugar > 0){
                price += 0.1;
            }
            if(coins >= price){
                console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(coins-price).toFixed(2)}`);
                totalMoney += price;
            }
            else{
                console.log(`Not enough money for ${typeOfDrink}. Need $${(price-coins).toFixed(2)} more.`);
            }
    });
    console.log(`Income Report: $${totalMoney.toFixed(2)}`);
}
solve([
  '1.00, coffee, caffeine, milk, 4',
  '0.40, tea, milk, 2',
  '1.00, coffee, decaf, 0'
])
solve([ '8.00, coffee, decaf, 4', '1.00, tea, 2' ])