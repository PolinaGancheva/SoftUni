// function solve(arr){
//     let num = Number(arr.shift());
//     arr.forEach((command) => {
//         if(command === 'chop'){
//             num = num / 2;
//             console.log(num); 
//         }
//         else if(command === 'dice'){
//             num = Math.sqrt(num);
//             console.log(num); 
//         }
//        else if(command === 'spice'){
//             num = num + 1;
//             console.log(num); 
//         }
//         else if(command === 'bake'){
//             num = num * 3;
//             console.log(num); 
//         }
//         else if(command === 'fillet'){
//             num = num - 0.2 * num;
//             console.log(num); 
//         }

//     });
// }
function solve2(arr){
    let number = Number(arr.shift());

    let operations = {
        chop: (x) => {return(x/2)},
        dice: (x) => {return Math.sqrt(x)},
        spice: (x) => {return ++x},
        bake: (x) => {return x *= 3},
        fillet: (x) => {return x *= 0.8}
    }
    for(let index = 0; index < arr.length; index++){
        number = operations[arr[index]](number);
        console.log(number);
    }
}
solve2(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])