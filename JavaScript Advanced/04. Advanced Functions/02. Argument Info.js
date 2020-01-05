function solve(...input){
    Object.entries(
        input.reduce((previous,current) => {
        let typeOfArgs = typeof current;
        
        console.log(`${typeOfArgs}: ${current}`);
        if(!previous.hasOwnProperty(typeOfArgs)){
            previous[typeOfArgs] = 0;
        }
        previous[typeOfArgs]++;
        return previous;
      },{})
      )
     .sort((a,b) => b[1] - a[1])
     .map(([type,count]) => `${type} = ${count}`)
     .forEach((el) => console.log(el));
   
}
// function argumentInfo() {
//     let typeCounts = {};
//     for(let arg of arguments){
//         console.log(`${typeof(arg)}: ${arg}`);
//         if(! typeCounts[typeof(arg)]){
//             typeCounts[typeof(arg)] = 1;
//         } else {
//             typeCounts[typeof(arg)]++;
//         }
//     }
  
//     Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
// }
//solve('cat', 42, function () { console.log('Hello world!'); })
//argumentInfo({ name: 'bob'}, 3.333, 9.999)
solve({ name: 'bob'}, 3.333, 9.999)