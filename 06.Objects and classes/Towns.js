function solve(arr){
    let townOne = {};  
    let name = 'town';
    let latitude = 'latitude';
    let longitude = 'longitude';
    arr.forEach((line) => {
      let splited = line.split(' | ');
      townOne[name] = splited[0];
      townOne[latitude] = Number(splited[1]).toFixed(2);
      townOne[longitude] = Number(splited[2]).toFixed(2);
      console.log(townOne);

    });
      
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)