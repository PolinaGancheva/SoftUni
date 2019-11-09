function solve(arr,sum){
    for(let i = 0; i < arr.length; i++){
        let currentEl = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            let nextEl = arr[j];
            if(currentEl+nextEl === sum){
                console.log(`${currentEl} ${nextEl}`);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],
    8);
solve([14, 20, 60, 13, 7, 19, 8],
    27
    )