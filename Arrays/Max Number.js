// function max(arr) {
//     let result = [];
//         while(arr.length !== 0) {
//             let current = arr.shift();
//             let biggest =  Math.max(...arr);
//            // let [current, biggest] = [arr.shift(), Math.max(...arr)]
//             if(current > biggest){
//                 result.push(current);
//             } 
//        }
//        console.log( result.join(' '));
//     }
   function solve(array){
    let topIntegers = [];

    for(let i = 0; i < array.length; i++){
        let currentEl = array[i];
        let isTopInteger = true;
        for(let j = i+1; j < array.length; j++){
            let nextEl = array[j];

            if(currentEl <= nextEl){
                isTopInteger = false;
                break;
            }
        }
        if(isTopInteger){
            topIntegers.push(currentEl);
        }
    }
    console.log(topIntegers.join(' '));
    }
solve([14, 24, 3, 19, 15, 17])