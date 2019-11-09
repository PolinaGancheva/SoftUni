function solve(input){
  let arr = input.split(' ');
  let materials = {};
  let keyMaterails = {
      'shards': 0,
      'fragments': 0,
      'motes': 0
  };
  let winner = '';
  for(let i = 0 ; i <= arr.length-1; i+=2){
    let quantity = Number(arr[i]);
    let  material = arr[i+1].toLowerCase();

    if(material === 'shards' || material === 'fragments' || material === 'motes'){
        keyMaterails[material] += quantity;
        if(keyMaterails[material]>= 250 && material === 'shards'){
            winner = 'Shadowmourne' ;
            keyMaterails[material] -= 250;
            break;
         }
         else if(keyMaterails[material]>= 250 && material === 'fragments'){
             winner = 'Valanyr' ;
             keyMaterails[material] -= 250;
             break;
          }
          else if(keyMaterails[material]>= 250 && material === 'motes'){
             winner = 'Dragonwrath' ;
             keyMaterails[material] -= 250;
             break;
          }
    }   

    else{
        if(!materials.hasOwnProperty(material)){
            materials[material] = quantity;
        }
        else{
            materials[material] += quantity;
        }
    }

  }
  console.log(`${winner} obtained!`);

  let sortedkeyMaterails = Object.entries(keyMaterails);
  sortedkeyMaterails.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
//   for (let [material, quantity] of sortedkeyMaterails) {
//     sortedkeyMaterails.sort(sortDescending); 
//     if(quantity === sortedkeyMaterails[1][1] ){
//         sortedkeyMaterails.sort(sortAlphabetically);
//     }
//   }

  let sortedMaterails = Object.entries(materials);

 // for (let [material, quantity] of sortedMaterails) {
    sortedMaterails.sort(((a, b) =>  a[0].localeCompare(b[0]))); 
 // }
  
//   function sortDescending(firstMaterial, secondMaterial){
//     let firstQuantity = firstMaterial[1];
//     let secondQuantity = secondMaterial[1];
//     return secondQuantity - firstQuantity;
//    }

    // function sortAlphabetically(firstMaterial, secondMaterial){
    //    let firstMaterialName = firstMaterial[0];
    //    let secondMaterialName = secondMaterial[0];
    //   return firstMaterialName.localeCompare(secondMaterialName);
    // }
for(let [material, quantity] of sortedkeyMaterails){
    console.log(`${material}: ${quantity}`);
}
for(let [material, quantity] of sortedMaterails){
    console.log(`${material}: ${quantity}`);
}
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
//solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
solve('240 ShaRDs 240 fragments 6 fragment 7 shard 6 fragments 4 shards 10 fragments');