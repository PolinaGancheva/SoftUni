function solve(arr){
    let contacts = arr.shift();
    contacts = contacts.split(' ');
    for(let i = 0; i < arr.length; i++){
        let instruction = arr[i].split(' ');
        let command = instruction[0];
        if(command === 'Add'){
            let contact = instruction[1];
            let index = Number(instruction[2]);
            if(contacts.includes(contact)){
                if (index >= 0 && index <= contacts.length) {
                contacts.splice(index, 0, contact);
                }
            }
            else{
                contacts.push(contact);
            }
        }
        else if(command === 'Remove'){
            let index = Number(instruction[1]);
            if(index >= 0 && index < contacts.length){
                contacts.splice(index,1);
            }
        }
        else if(command === 'Export'){
            let startIndex = Number(instruction[1]);
            let count = Number(instruction[2]);
            let result = contacts.slice(startIndex,startIndex+count);
            // if(count > contacts.length){
            //     count = contacts.length;
            // }
            // for(let j = startIndex; j < count; j++ ){
            //     console.log(contacts[j].join('\n'));
            // }
            console.log(result.join(' '));
        }
        else if(command === 'Print'){
            if(instruction[1] === 'Normal'){
                console.log(`Contacts: ${contacts.join(' ')}`);
                break;
            }
            else if(instruction[1] === 'Reversed'){
                let reversed = contacts.reverse();
                console.log(`Contacts: ${reversed.join(' ')}`);
                break;
            }
        }
    }
    
}
// solve([
//   'Alisson Bellamy Candace Tristan',
//   'Remove 3',
//   'Add Bellamy 2',
//   'Add Poli 2',
//   'Print Normal'
// ]);
solve([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
  ]);