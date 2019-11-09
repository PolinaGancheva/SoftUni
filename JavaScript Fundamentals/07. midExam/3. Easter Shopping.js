function solve(arr){
    let shops = arr.shift();
    shops = shops.split(' ');
    for(let i = 0; i < arr.length; i++){
        let instructions = arr[i].split(' ');
        let command = instructions[0];
        if(command === 'Include'){
            let shop = instructions[1];
            shops.push(shop);
        }
        else if(command === 'Visit'){
            let firstOrLast = instructions[1];
            let numberOfShops = Number(instructions[2]);
            if(firstOrLast === 'first'){
                if(numberOfShops <= shops.length && numberOfShops >=0 ){
                    shops.splice(0, numberOfShops);
                }
            }
            else if(firstOrLast === 'last'){
                if(numberOfShops <= shops.length  && numberOfShops >=0 ){
                    shops.splice(shops.length - numberOfShops, shops.length);
                }
            }
        }
        else if(command === 'Prefer'){
            let firstShopIndex = Number(instructions[1]);
            //let firstShop = shops[firstShopIndex];
            let secondShopIndex = Number(instructions[2]);
            //let secondShop = shops[secondShopIndex];
            if(firstShopIndex >= 0 && secondShopIndex >=0 && firstShopIndex < shops.length && secondShopIndex < shops.length){
                // shops.splice(firstShopIndex,1);
                // shops.splice(firstShopIndex,0,secondShop);
                // shops.splice(secondShopIndex,1);
                // shops.splice(secondShopIndex,0,firstShop);
                const tempStoreFirstIndex = shops[firstShopIndex];
                shops[firstShopIndex] = shops[secondShopIndex]
                shops[secondShopIndex] = tempStoreFirstIndex;
            }
        }
        else if(command === 'Place'){
            let shop = instructions[1];
            let shopIndex = Number(instructions[2]);
            if(shopIndex >= 0 && shopIndex < shops.length){
            let shop = instructions[1];
                shops.splice(shopIndex+1,0,shop);
            }   
        }
    }
    console.log(`Shops left:\n ${shops.join(' ')}`);
}
solve([
  'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
  '5',
  'Include HM',
  'Visit first 2',
  'Visit last 1',
  'Prefer 3 1',
  'Place Library 2'
]);
solve([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
  ])