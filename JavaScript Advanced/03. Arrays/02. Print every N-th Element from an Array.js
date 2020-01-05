function solve(input){
    let step = Number(input.pop());
    // for(let i = 0; i < input.length; i += step){
    //     console.log(input[i]);
    // }
   console.log(input.filter((el, index) => { return index % step === 0}).join('\n')) 
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)