class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(arr){
        let messageLog = []
        arr.forEach(element => {
            let [productName, productQuantity, productPrice] = element.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);
            if(this.budget - productPrice >= 0){
                if(!this.productsInStock.hasOwnProperty(productName)){
                    this.productsInStock[productName] = productQuantity;
                    this.budget -= productPrice;
                }else{
                    this.productsInStock[productName] += productQuantity;
                }
                messageLog.push(`Successfully loaded ${productQuantity} ${productName}`);
            }else{
                messageLog.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });
        this.actionsHistory = [...this.actionsHistory, ...messageLog]
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){
            if(!this.menu.hasOwnProperty(meal)){
                this.menu[meal] = {products: neededProducts, price: +price};
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }else{
                return `The ${meal} is already in our menu, try something different.`
            }
           
    }
  
    showTheMenu(){
        let result = [];
        if(Object.keys(this.menu).length === 0){
            return 'Our menu is not ready yet, please come later...';
        }else{
            for (let [key, value] of Object.entries(this.menu)) {
                result.push(`${key} - $ ${this.menu[key].price}`);
              }
              return result.join('\n') + '\n';
        }
    }

    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }else{
            let neededIngredients = this.menu[meal].products;
            for(let item of neededIngredients){
               let [neededProduct, neededQuantity ] = item.split(' ');
               neededQuantity = Number(neededQuantity);
              if(neededQuantity > this.productsInStock[neededProduct] || !this.productsInStock[neededProduct]){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
              }
            }
            for(let item of neededIngredients){
                let [neededProduct, neededQuantity ] = item.split(' ');
                this.productsInStock[neededProduct] -= neededQuantity;
                this.budget += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
             }
        }
    }
}
let kitchen = new Kitchen (10000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));