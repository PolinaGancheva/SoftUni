function solve(startingYeild){
    let spices = 0;
    let counter = 0;
    if(startingYeild < 100){
        console.log(counter);
            console.log(spices);
    }
    else{
            while(startingYeild >= 100){
                spices += startingYeild - 26;
                counter++;
                startingYeild -= 10;
            }
            if(startingYeild < 100){
                spices -= 26;
            }
            console.log(counter);
            console.log(spices);
        }
   
}
solve(111)