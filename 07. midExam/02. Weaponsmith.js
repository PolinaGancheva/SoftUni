function solve(arr){
    let strParts = arr.shift().split('|');
    arr.forEach((line) => {
        let tokens = line.split(' ');
        let command = tokens.shift();
        let direction = tokens.shift();
        //console.log(direction);
        if(command ==='Move'){
            let index = Number(tokens.shift());
            if(direction === 'Left'){
                if(index > 0 && index <= strParts.length){
                   let toLeft = strParts.splice(index,1).join('');
                    strParts.splice(index-1,0,toLeft);
                }
            }
            else if(direction === 'Right'){
                if(index >= 0 && index < strParts.length){
                    let toRigth = strParts.splice(index,1).join('');
                     strParts.splice(index+1,0,toRigth);
                 }
            }
        }   
        let evenNums = [];
        let oddNums = [];
        if(command === 'Check'){
            if(direction === 'Even'){
                for(let i = 0; i < strParts.length; i++){
                    if(i % 2 === 0){
                        evenNums.push(strParts[i]);
                    }
                }
                console.log(evenNums.join(' '));
            }
            else if(direction === 'Odd'){
                for(let i = 0; i < strParts.length; i++){
                    if(i % 2 !== 0){
                        oddNums.push(strParts[i]);
                    }
                }
                console.log(oddNums.join(' '));
            }
        }
    });
    console.log(`You crafted ${strParts.join('')}!`);
}
solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
  ]);
solve([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'])
    solve([
        'Ve|or|nd|st|ke|ri',
        'Check Even',
        'Move Right 5',
        'Move Left 2',
        'Move Left 0',
        'Move Right 4',
        'Done'
      ])