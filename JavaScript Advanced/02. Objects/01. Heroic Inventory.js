// function solve(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let obj = {};
//         let tokens = arr[i].split(' / ');
//         obj['name'] = tokens.shift();
//         obj['level'] = Number(tokens.shift());
    
//        tokens = tokens.toString().split(', ');
//        if(tokens == ""){
//         obj['items'] = [];
//      }
//        if(tokens.length > 1){
//            obj['items'] = tokens.toString().split(', ');
//         }
//         obj['items'] = tokens;
//         result.push(obj);
//     }
//    console.log(JSON.stringify(result));
// }
function solve(arr){
    let heroData = [];
    for(let i = 0; i < arr.length; i++){
        let currentHeroArguments = arr[i].split(' / ');
        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel= Number(currentHeroArguments[1]);
        let currentHeroItems = [];
        if(currentHeroArguments.length > 2){
            currentHeroItems = currentHeroArguments[2].split(', ');
        }
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);
    }
   
       
      
    console.log(JSON.stringify(heroData));
}
function heroicInventory(input) {
    let heroes = [];

    for(let line of input) {
        let tokens = line.split(/\s*\/\s*/);
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        let hero = {name: name, level: level, items: items};
        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}
//solve(['Isacc / 25 / ',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// );
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);