function solve(arr){
    let obj = {};
    let bottles = {};
    for(let line of arr) {
       let [name, quantity] = line.split(' => ');
       let juices = 0;
       if(!obj.hasOwnProperty(name)){
        obj[name] =  Number(quantity);
        } 
        else{
            obj[name] += Number(quantity);
        }  
        while(obj[name] >= 1000){
            juices++;
            obj[name] -= 1000;
        }
      
        if(juices !== 0){
            if(!bottles.hasOwnProperty(name)){
                bottles[name] = juices;;
            } else{
                bottles[name] += juices;
            }
        }
    }
    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
  
}
