function solve(arr){
    let dictionary = {};
    let parsedItems = arr.map(JSON.parse);
    parsedItems.forEach(item => {
        let tuple = Object.entries(item);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;

    });
    let sortedItems = Object.entries(dictionary)
    .sort((a,b) => a[0].localeCompare(b[0]));
    for(let kvp of sortedItems){
        console.log(`Term: ${kvp[0]} => Definition: ${kvp[1]}`)
    }
    //console.log(sortedItems);
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )