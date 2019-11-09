function solve(arr){
    let quests = arr.shift().split(', ');
    arr.forEach((line) => {
        let tokens = line.split(' - ');
        let command = tokens.shift();
        if(command === 'Start'){
            let quest = tokens[0];
            if(!quests.includes(quest)){
                quests.push(quest);
            }
        }
        if(command === 'Complete'){
            let quest = tokens[0];
            if(quests.includes(quest)){
                quests.splice(quests.indexOf(quest),1);
            }
        }
        if(command === 'Side Quest'){
            tokens = tokens.toString();
           let quest = tokens.slice(0,tokens.indexOf(':'));
           let sideQuest = tokens.slice(tokens.indexOf(':')+1);
            if(quests.includes(quest)){
                if(!quests.includes(sideQuest)){
                    quests.splice(quests.indexOf(quest)+1,0,sideQuest);
                }
              
            }
        }
        if(command === 'Renew'){
            let quest = tokens[0];
            if(quests.includes(quest)){
                quests.splice(quests.indexOf(quest),1);
                quests.push(quest);
            }
        }

    });
    console.log(quests.join(', '));
}
solve([
  'Hello World, For loop, If else',
  'Start - While loop',
  'Complete - For loop',
  'Retire!'
])
// solve([
//     'Hello World, If else',
//     'Complete - Homework',
//     'Side Quest - If else:Switch',
//     'Renew - Hello World',
//     'Retire!'
//   ])