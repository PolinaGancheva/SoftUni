function solve(input){
    let arr = input.shift().split(/[, ]+/g);
    let patern = /[^\+\-\*\/.\d+]/g;
    let digits = /[+-]?\d*\.?\d+/g;
    let result = [];
    arr.forEach((name) => {
        let obj = {};
        let totalHealth = 0;
        let totalDamage = 0;
        let lettersOnly = name.match(patern);
        let numsOnly = name.match(digits);
        if(lettersOnly){
            for(let i = 0; i < lettersOnly.length; i++){
                totalHealth += lettersOnly[i].charCodeAt(0);
            }
        }
        if(numsOnly){
            for(let i = 0; i < numsOnly.length; i++){
               totalDamage += +numsOnly[i];
            }
        }
      
        for(let i = 0; i < name.length; i++){
          if(name[i] === '*'){
            totalDamage *= 2;
          }
          else if(name[i] === '/'){
            totalDamage /= 2;
        } 
    }
        obj['name'] = name;
        obj['damgehealth'] = [totalHealth,totalDamage];
       
        result.push(obj);
    });

    result.sort((a, b) => a.name.localeCompare(b.name));
    for(let i = 0; i < result.length; i++){
        console.log(`${result[i].name} - ${result[i].damgehealth[0]} health, ${(result[i].damgehealth[1]).toFixed(2)} damage`);
    }
   
 }
// solve([ 'M3ph-0.5s-0.5t0.0*/' ]
// // );
  solve([ 'M3ph1st0**, Azazel' ])
 solve(['Gos/ho']);