function solve(currentStock,orderedProducts){
    let products = {};
    for(let i = 0 ; i <= currentStock.length-1; i+=2){
        let productName = currentStock[i];
        let quantity = Number(currentStock[i+1]);
        products[productName] = quantity;
    }
    for(let i = 0 ; i <= orderedProducts.length-1; i+=2){
        let productName = orderedProducts[i];
        let quantity = Number(orderedProducts[i+1]);
        if(products.hasOwnProperty(productName)){
            products[productName] += quantity;
        }
        else{
            products[productName] = quantity;
        }
    }
    for (const key in products) {
        let quantity = products[key];
        console.log(`${key} -> ${quantity}`)
    }
   
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )