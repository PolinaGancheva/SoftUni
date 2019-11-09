function solve(str){
    let arr = str.split(' ');
    let letters =/^[A-Za-z]+$/;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith('#')){
           let arrWithout = arr[i].slice(1);
           if(arrWithout.match(letters)){
            console.log(arrWithout);
           }
          
        }
    }   
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')