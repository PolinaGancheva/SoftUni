function solve(arr){
    let numOfMessages = arr.shift();
    let attackedPlanetsCount = 0;
    let destroyedPlanetsCount = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    arr.forEach((line) => {
        let pattern = /@(?<name>[A-Za-z]+)[^@ - ! : >]*:(?<population>\d+)[^@ - ! : >]*!(?<attacktype>[A|D])![^@ - ! : >]*->(?<soldercount>\d+)/g;
        let counter = 0;
        for(let i = 0; i < line.length; i++){
            if(line[i].toLowerCase() === 's' || line[i].toLowerCase() === 't' || line[i].toLowerCase() === 'a'|| line[i].toLowerCase() === 'r'){
                counter++;
            }  
        }
        let decrypted = '';
        for(let j = 0; j < line.length; j++){
            let toNum = line.charCodeAt(j) - counter;
            decrypted += (String.fromCharCode(toNum));
        }
      //  console.log(decrypted);
        let result = pattern.exec(decrypted);
        if(result){
            if(result.groups.attacktype === 'A'){
                attackedPlanetsCount++;
                attackedPlanets.push(result.groups.name);
            }
            else if(result.groups.attacktype === 'D'){
                destroyedPlanetsCount++;
                destroyedPlanets.push(result.groups.name);
            }
        }
    });
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanetsCount}`);
    if(attackedPlanetsCount > 0){
        console.log(`-> ${attackedPlanets.join('\n-> ')}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    if(destroyedPlanetsCount > 0){
        console.log(`-> ${destroyedPlanets.join('\n-> ')}`);
    }
   
}
// solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ]);
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ])