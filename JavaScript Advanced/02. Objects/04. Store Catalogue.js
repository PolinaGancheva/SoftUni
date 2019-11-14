function solve(arr){
    let obj = {};
    for (const line of arr) {
        let [name, quantity] = line.split(' : ');
        obj[name] = quantity; 
    }
   let initials = new Set;
   let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
  
   sorted.map(x => initials.add(x[0][0]));
   
   for (let item of initials){
    console.log(item);
    sorted.map((x) => {
        if(x[0].startsWith(item)){
             console.log(`${x[0]}: ${x[1]}`)
        }
    });
   }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
