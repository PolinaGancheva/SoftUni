function solve(fruitName,weightGrams,pricePerKg){
    let money = weightGrams/1000 * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${(weightGrams/1000).toFixed(2)} kilograms ${fruitName}.`);

}
solve('orange', 2500, 1.8);