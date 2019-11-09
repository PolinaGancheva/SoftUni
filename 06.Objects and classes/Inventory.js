function solve(arr){
    let heroes = [];
    arr.forEach((line) => {
        let [heroName,heroLevel,items] = line.split('/');
        items = items.split(',');
        items.sort((a,b) => a.localeCompare(b));
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: items
        };
        heroes.push(hero);
    });
    heroes.sort((a,b) => a.level - b.level);
   for (let hero of heroes) {
       console.log(`Hero: ${hero.name}`);
       console.log(`level => ${hero.level}`);
       console.log(`items =>${hero.items.join(',')}`);
   }
 }
   
   
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )