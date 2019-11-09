function solve(input){
    //for(let i = 0; i <= input.length-1; i++){
        let days = Number(input.shift());
        let countOfPlayers = Number(input.shift());
        let groupsEnergy = Number(input.shift());
        let waterPerDayPerPerson = Number(input.shift());
        let water = countOfPlayers * days * waterPerDayPerPerson;
       
        let foodPerDayPerPerson = Number(input.shift());
        let food = countOfPlayers * days * foodPerDayPerPerson;
        let consumedEnergy = input.map(Number);//convert from array with string to array with numbers

        for(let i = 1; i <= days; i++){
            let energyLoss = consumedEnergy.shift();
            groupsEnergy -= energyLoss;
            if(groupsEnergy <= 0){
                break;
            }
            if(i % 2 === 0){
                groupsEnergy += 0.05* groupsEnergy;
                water -= 0.3 * water;
            }
            if(i % 3 == 0){
                food -= food / countOfPlayers;
                groupsEnergy += 0.1 * groupsEnergy;
            }
           
        }
        if(groupsEnergy > 0){
            console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
        }
        else{
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
        }
}
solve([
    '10',     '7',      '5035.5',
    '11.3',   '7.2',    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3',  '784.20',
    '321.21', '456.8',  '330',
  ]);
  solve([
    '12',    '6',     '4430',
    '9.8',   '5.5',   '620.3',
    '840.2', '960.1', '220',
    '340',   '674',   '365',
    '345.5', '212',   '412.12',
    '258',   '496',   ''
  ]
  )