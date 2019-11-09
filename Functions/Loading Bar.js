function loadingBar(num){
    let arr = [];
    for(let i = 0; i < num/10; i++){
         arr.push('%');
        }
    for(let j = num/10; j < 10; j++){
        arr.push('.');
    }
    
   
    if(num === 100 ){
        console.log('100% Complete!');
        console.log(`${num}% [${arr.join('')}]`);
    }
    else{
        console.log(`${num}% [${arr.join('')}]`);
        console.log('Still loading...')
    }
}
loadingBar(100);