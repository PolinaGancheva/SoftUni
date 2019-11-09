function solve(input){
    let mines = {};
    for(let i = 0; i <= input.length-1; i+=2){
        let resourse = input[i];
        let quantity = input[i+1];
        if(!mines.hasOwnProperty(resourse)){
            mines[resourse] = Number(quantity);
        }
        else{
            mines[resourse] +=Number(quantity) ;
        }
        
    }
    for (let key in mines) {
        console.log(`${key} -> ${mines[key]}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )