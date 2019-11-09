function solve(arr){
    let buscitsPerDayPerPerson = Number(arr.shift());
    let workers = Number(arr.shift());
    let buscitsPer30days = Number(arr.shift());
    let countBiscuits = 0;
    let diff = 0;
    for(let i = 1; i <= 30; i++){
      
        if(i % 3 === 0){
            countBiscuits += Math.floor(0.75* buscitsPerDayPerPerson * workers);
        }
        else{
            countBiscuits += Math.floor(buscitsPerDayPerPerson * workers);
        }
        
    }
    diff = countBiscuits - buscitsPer30days;
    console.log(`You have produced ${Math.floor(countBiscuits)} biscuits for the past month.`);
    if(countBiscuits > buscitsPer30days){
        console.log(`You produce ${(diff/buscitsPer30days*100).toFixed(2)} percent more biscuits.`)
    }
    else{
        console.log(`You produce ${Math.abs((diff/buscitsPer30days*100)).toFixed(2)} percent less biscuits.`)
    }
}
solve([ '78', '8', '16000' ]
)
solve([ '65', '12', '26000' ]
)