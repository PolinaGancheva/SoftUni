function solve(input){
    let rotationsCount = Number(input.pop()) % input.length;
    // for(let i = 0; i < rotationsCount; i ++){
    //    input.unshift(input.pop());
    // }

    return input.reduceRight((acc,curr) => {
        if(rotationsCount){
            acc = [curr,...acc.slice(0,input.length-1)];
            rotationsCount--;
        }
    
        return acc;
    },[...input]).join(' ');
  //  console.log(input.join(' '));
}
console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
)

)