function solve(input){
    // let init = 1;
    // let arr = [];
    // for(let i = 0; i < input.length; i++){
    //     if(input[i] === 'add'){
    //         arr.push(init);
    //     }
    //     else if(input[i] === 'remove'){
    //         arr.pop();
    //     }
    //     init++;
    // }
    // if(arr.length > 0){
    //     console.log(arr.join('\n'));
    // }else{
    //     console.log('Empty')
    // }
    let commands = {
        counter: 1,
        add: (arr,num) => [...arr,num],
        remove: (arr) =>[...arr.slice(0, arr.length-1)]
    };
    let result = input.reduce((acc,curr) => {
        acc = commands[curr](acc,commands.counter);
        commands.counter++;
        return acc;
    },[]);
    console.log(result.length === 0 ? 'Empty' : result.join('\n'));
}
solve(['add', 
'add', 
'add', 
'add']

)