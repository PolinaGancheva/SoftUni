    let manager = (function() {
        let ingredientObj = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        }
        let recipesObj = {
            apple: {
                carbohydrate: 1,
                flavour: 2
            },
            lemonade: {
                carbohydrate: 10,
                flavour: 20
            },
            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3
            },
            eggs: {
                protein: 5,
                fat: 1,
                flavour: 1
            },
            turkey: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10
            }
        };
        const prepareRecepie = (recepie, neededQuantity) => {
            const neededIngredients = Object.entries(recipesObj[recepie]);

            for(const [ing, qty] of neededIngredients){
                const ingredientStored = ingredientObj[ing] * neededQuantity;
                if(qty > ingredientStored){
                    return `Error: not enough ${ing} in stock`;
                }
            }
            for (const [ing, qty] of neededIngredients){
                ingredientObj[ing] -= qty * neededQuantity;
            }
            return 'Success';
        }
      return function(input){
          const tokens = input.split(' ');
          const command = tokens[0];
          switch(command){
              case 'restock': ingredientObj[tokens[1]] = Number(tokens[2])
              return 'Success';
              case 'prepare': return prepareRecepie(tokens[1], Number(tokens[2]))
              case 'report':
                  return Object.entries(ingredientObj)
                  .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                  .join(' ');
          }
      }
})()

console.log(manager('restock carbohydrate 10', 'Success'))
console.log(manager('restock flavour 10', 'Success'))
console.log(manager('prepare apple 1', 'Success'))
console.log(manager('restock fat 10', 'Success'))
console.log(manager('prepare burger 1', 'Success'))
console.log(manager('report', 'protein=0 carbohydrate=4 fat=3 flavour=5'))
