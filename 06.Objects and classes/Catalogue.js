function solve(input){
    let products = {};
    let uniqueLetter = ''
    input.forEach((line) => {
        let [productName,productPrice] = line.split(' : ');
        products[productName] = productPrice;
        //let products = new Map();
       
    });
    let sortedItems = Object.entries(products)
    .sort((a,b) => a[0].localeCompare(b[0]));
    for(let i = 0; i < sortedItems.length; i++){
        let currentLetter = sortedItems[i][0][0];
     
            if(uniqueLetter.indexOf(currentLetter) < 0){
                uniqueLetter += currentLetter;
                console.log(currentLetter);
            }
           
        console.log(sortedItems[i].join(': ')); 

    }
}
solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
]
    )