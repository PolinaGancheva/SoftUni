function solve(arr){
    let invertory = arr[0].split(' ');
    for(let i = 1; i <= arr.length-1; i++){
        let splited = arr[i].split(' ');
        let command = splited[0];
        let equipment = splited[1];
        if(command === 'Buy'){
            buy();
        }
         else if(command === 'Trash'){
            trash();
         }
         else if(command === 'Repair'){
            repair();
         }
         else if(command === 'Upgrade'){
            upgrade();
         }
        function buy(){
            if(!invertory.includes(equipment)){
                invertory.push(equipment);
            }
        }
        function trash(){
            if(invertory.includes(equipment)){
                invertory.splice(invertory.indexOf(equipment),1);
            }
        }
        function repair(){
            if(invertory.includes(equipment)){
                let repaired = invertory.splice(invertory.indexOf(equipment),1);
                invertory.push(repaired);
            }
        }
        function upgrade(){
            let old = equipment.split('-');
                if(invertory.includes(old[0])){
                     upgradedPosition = invertory.indexOf(old[0]);
                     let upgraded = equipment.replace('-',':');
                     invertory.splice((upgradedPosition+1), 0, upgraded);
             }
           
        }
     
    }
    console.log(invertory.join(' '));
}
solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);
// solve(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V']
// )