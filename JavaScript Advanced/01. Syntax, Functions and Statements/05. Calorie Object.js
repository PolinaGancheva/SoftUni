function solve(arr){
    let obj = {};
    let result ='';
    for(let i = 0; i < arr.length; i+=2){
        let name = arr[i];
        let calories = arr[i+1];
        obj[name] = Number(calories);
    }
   
    console.log(obj);
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])