function solve(arr){
    let racers = arr.shift().split(', ');
    let results = {};
    arr.forEach((line) => {
        let namePattern = /[A-Za-z]+/g;
        let distancePattern = /[\d]/g;
        let names = line.match(namePattern).join('');
        if(racers.includes(names)){
            let distance = line.match(distancePattern).reduce((a,b) => +a + +b, 0);
            if(!results[names]){
                results[names] = 0;
            }
                results[names] += distance;
        }
      
    });
   
  
   Object.keys(results)
    .sort((a,b) => results[b] - results[a])
    .slice(0,3)
    .forEach((participant, i) => {
        let place = '';
        switch(i){
            case 0: 
                 place = 'st';
                break;
             case 1: 
                place = 'nd';
                break;
             case 2: 
                place = 'rd';
                break;

        }
        console.log(`${i+1}${place} place: ${participant}`);
    })
  
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ])