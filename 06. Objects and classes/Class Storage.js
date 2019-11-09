class Storage{
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        
    }
    addProduct(product){
        this.storage.push(product);
        // this.storage.name = product.name;
        // this.storage.price = product.price;
        // this.storage.quantity = product.quantity;
        this.capacity -= product.quantity;
        this.totalCost = this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }
    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        console.log(output.join('\n'));
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
