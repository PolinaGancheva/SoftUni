function solve(arr1,arr2){
    let result = '';
    for(let i = 0; i <= arr1.length-1; i++){
        for(let j = 0 ; j <= arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result += arr1[i]+'\n';
            }
            
        }
    }
    console.log(result);
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])