    let manager = (function() {
        let robot = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        }
        let recipes = {
            apple: {
                carb: 1,
                flavour: 2
            },
            lemonade: {
                carb: 10,
                flavour: 20
            },
            burger: {
                carb: 5,
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
                fat: 1,
                flavour: 1
            }
        }
      
        return {
                 restock:(microelement, quantity) =>{ 
                    robot[microelement] += quantity;
                    return 'Success';
                 },
                  prepare: (recipe, quantity)=>{
                    let error = false;
                    for (let rec in recipes[recipe]) {
                        let str = rec;
        
                        if (str == 'carb')
                            str = 'carbohydrate';
        
                        if (robot[str] >= recipes[recipe][rec] * quantity) {
                            robot[str] -= recipes[recipe][rec] * quantity;
                        } else {
                           error = true;
                           return `Error: not enough ${str} in stock`;
                        }
                    }
        
                    if (!error)
                      return'Success';
                 },
                 print: () => {
                    let result = '';
                    for (let prop in robot)
                        result += `${prop}=${robot[prop]} `;
        
                     return result;
                }
               
            }
})()
for (let cmd of input) {
    [command, val1, val2] = cmd[0].split(' ');
    manager[command](val1, val2);
//     if(command === 'restock'){
//         restock(val1,val2);
       
//     }
//    else if(command === 'prepare'){
//     prepare(val1,val2); 
//    }
//     else if(command === 'report'){
//         print; 
//     }


let input = [
    ['restock flavour 50', 'Success'],
    ['prepare lemonade 4', 'Error: not enough carbohydrate in stock']
];
}
console.log(solve(input));