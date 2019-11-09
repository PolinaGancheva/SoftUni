function solve(arr){
    let concataneted = (arr[0]+arr[1]);
    concataneted.split(' ');
    let password = '';
    let replaced = '';
    let counter = 0;
    for(let i = 0; i < concataneted.length; i++){
        
        if(concataneted[i] === 'a' || concataneted[i] === 'e' ||
         concataneted[i] === 'i' || concataneted[i] === 'o' || concataneted[i] === 'u'){
             if(counter > arr[2].length-1){
                counter = 0;
             }
             replaced += arr[2][counter].toUpperCase();
            counter++;

    }
        else{
            replaced += concataneted[i];
        }
    //console.log(replaced);
    }
    for(let j = replaced.length-1; j >= 0; j --){
        password += replaced[j];
    }
    console.log(`Your generated password is ${password}`);
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )