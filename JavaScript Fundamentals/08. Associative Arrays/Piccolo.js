function solve(input){
    let parkingLot = {};
    input.forEach((line) => {
        let [direction, carNumber] = line.split(', ');
        if(direction === 'IN'){
            parkingLot[carNumber] = direction;
        }
        else if(direction === 'OUT'){
            delete parkingLot[carNumber];
        }  

    });
    let sortedNums = Object.entries(parkingLot)
    .sort(sortNums);
    function sortNums(firstCar, secondCar){
        let firstCarNum = firstCar[0];
        let secondCarNum = secondCar[0];
        return firstCarNum.localeCompare(secondCarNum);
    }
    if(sortedNums.length === 0){
        console.log('Parking Lot is Empty');
    }
    for(let [cars] of sortedNums){
        console.log(`${cars} `) ;
       
    }
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
// solve(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']
// )