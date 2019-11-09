function solve(arr){
    let tokens = arr[0].split('|');
    let budget = Number(arr[1]);
    let newPrices =[];
    let profit = 0;
    tokens.forEach((line) => {
        let [type, price ] = line.split('->');
        price = Number(price);
        if(type === 'Clothes' && price <= 50 && budget >= price){
            budget -= price;
            newPrices.push(price + 0.4 * price);
            profit += price;
        }
        else if(type === 'Shoes' && price <= 35 && budget >= price){
            budget -= price;
            newPrices.push(price + 0.4 * price );
            profit += price;
        }
        else if(type === 'Accessories' && price <= 20.5 && budget >= price){
            budget -= price;
            newPrices.push(price + 0.4 * price);
            profit += price;
        }
       
    });
    budget += newPrices.reduce((acc,currentValue) => +acc + +currentValue);
    newPrices = newPrices.map(a => a.toFixed(2));
    console.log(newPrices.join(' '));
    profit = 0.4 * profit;
    
    console.log(`Profit: ${profit.toFixed(2)}`);
    if(budget >= 150){
       console.log(`Hello, France!`);
    }else{
        console.log(`Time to go.`);
    }
}   
// solve([
//   'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
//   '120'
// ]
// );
solve([
    'Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
  ])