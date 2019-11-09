function solve(arr){
    let names = arr.shift();
    names = names.split(' ');
    for(let i = 0; i < arr.length; i++){
        let instruction = arr[i].split(' ');
        let command = instruction[0];
        if(command === 'Join'){
            let name = instruction[1];
            if(!names.includes(name)){
                names.push(name);
            }
        }
        else if(command === 'Jump'){
            let name = instruction[1];
            let index = Number(instruction[2]);
            if(index >= 0 && index <= names.length){
                names.splice(index,0,name);
            }
        }
        else if(command === 'Dive'){
            let index = Number(instruction[1]);
            if(index >= 0 && index <= names.length){
                names.splice(index,1);
            }
        }
        else if(command === 'First'){
            let count = Number(instruction[1]);
            let result = names.slice(0,count);
            console.log(result.join(' '));
        }
        else if(command === 'Last'){
            let count = Number(instruction[1]);
            let result = names.slice(names.length - count,names.length);
            console.log(result.join(' '));
        }
        else if(command === 'Print'){
            let type = instruction[1];
            if(type === 'Normal'){
                console.log(`Frogs: ${names.join(' ')}`);
                break;
            }
            else{
                let reversed = names.reverse();
                console.log(`Frogs: ${reversed.join(' ')}`);
                break;
            }
        }
    }
}
// solve([
//   'Blake Muggy Kishko',
//   'Join Kvachko',
//   'Dive 0',
//   'First 10',
//   'Print Reversed'
// ])
solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]
  )