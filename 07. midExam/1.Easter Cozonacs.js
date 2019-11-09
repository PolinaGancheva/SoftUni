function solve(arr){
    let budget = Number(arr[0]);
    let flourPrice = Number(arr[1]);
    let eggsPrice = 0.75 * flourPrice;
    let milkPricePerLiter = 0.25 * flourPrice + flourPrice;
    let milkPerPortion = 0.25 * milkPricePerLiter;
    let cozonakPrice =  eggsPrice + milkPerPortion + flourPrice;
    let countOfCozonacs = 0;
    let coloredEggs = 0;
    while(budget >= cozonakPrice){
        budget -= cozonakPrice;
        countOfCozonacs++;
        coloredEggs += 3;
        
        
        if(countOfCozonacs % 3 === 0){
            coloredEggs -= countOfCozonacs - 2;
        }
    }
    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}
solve([ '20.50', '1.25' ]
);