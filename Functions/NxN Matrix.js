function nMatrix(n){
    
    for(let i = 0; i < n; i++){
        let arr = [];
        for(let j = 0; j < n; j++){
            arr += n + ' ';
        }
      
        console.log(arr);
    }
    
}
nMatrix(7);