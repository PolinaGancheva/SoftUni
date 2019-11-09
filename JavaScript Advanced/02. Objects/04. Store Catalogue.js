function solve(arr){
    let obj = {};
    for (const line of arr) {
        let [name, quantity] = line.split(' : ');
        obj[name] = quantity; 
    }
    for (const key in obj) {
        if (key[0]) {
            
            
        }
    }
    console.log(obj);
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