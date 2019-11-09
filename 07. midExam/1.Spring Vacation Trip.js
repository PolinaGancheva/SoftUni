function solve(arr){
    let [ days, budget, groupOfPeople, pricePerKm, foodPrice, roomPrice, ...travelledDistance] = arr;
    let foodExpenses = foodPrice * groupOfPeople * days;
    let hotelExpenses = roomPrice * groupOfPeople * days;
    if(groupOfPeople > 10){
        hotelExpenses -= 0.25 * hotelExpenses;
    }
    let currentExpenses = foodExpenses + hotelExpenses;
    for(let i = 1; i <= Number(days); i++){
        currentExpenses += travelledDistance[i-1] * pricePerKm;

        if(i % 3 === 0 || i % 5 === 0){
            currentExpenses += 0.4 * currentExpenses;
        }
        if(i % 7 === 0){
            currentExpenses -= currentExpenses/Number(groupOfPeople);
        }
        if(currentExpenses > budget){
            break;
        }
    }
    if(budget >= currentExpenses){
        console.log(`You have reached the destination. You have ${(Number(budget) -currentExpenses).toFixed(2)}$ budget left.`);
    }
    else{
        console.log(`Not enough money to continue the trip. You need ${(currentExpenses-Number(budget)).toFixed(2)}$ more.`);
    }
    
}
// solve([
//   '7',   '12000', '5',
//   '1.5', '10',    '20',
//   '512', '318',   '202',
//   '154', '222',   '108',
//   '123'
// ]);
solve([
    '10',  '20500', '11',
    '1.2', '8',     '13',
    '100', '150',   '500',
    '400', '600',   '130',
    '300', '350',   '200',
    '300'
  ])