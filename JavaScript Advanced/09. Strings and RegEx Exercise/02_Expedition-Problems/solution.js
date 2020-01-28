function solve() {
    // let northRegex = /(north)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/igm;
    // let eastRegex = /(east)[^\d]*([0-9]{2})[^,]*,[^,]*?([0-9]{6})/igm;
    // let keyword = document.getElementById('string').value;
    // let text = document.getElementById('text').value;
    // let lastMatchNorth = text.match(northRegex).pop();
    // let lastMatchEast = text.match(eastRegex);
    // let matchesNorth = northRegex.exec(lastMatchNorth);
    // let matchesEast = eastRegex.exec(lastMatchEast);
    // let northLocation = matchesNorth[matchesNorth.length-2] + "." + matchesNorth[matchesNorth.length-1] + " N";
    // let eastLocation = matchesEast[matchesEast.length-2] + "." + matchesEast[matchesEast.length-1] + " E";
    // let message = text.match(`${keyword}(.+)${keyword}`)[1];
    // let northP = document.createElement('p');
    // northP.innerHTML = northLocation;
    // let eastP = document.createElement('p');
    // eastP.innerHTML = eastLocation;
    // let messageP = document.createElement('p');
    // messageP.innerHTML = `Message: ${message}`;
    // document.getElementById('result').appendChild(northP);
    // document.getElementById('result').appendChild(eastP);
    // document.getElementById('result').appendChild(messageP);
    let keyword = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let message = text.match(`${keyword}(.+)${keyword}`)[1];

    const locationPattern = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;

    let eastMatch;
    let northMatch;

    let result;
    while((result = locationPattern.exec(text)) !== null){
        if(result[1].toLowerCase() === 'east'){
            eastMatch = result;
        }else{
            northMatch = result;
        }
    }
    let northP = document.createElement('p');
    northP.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;
    let eastP = document.createElement('p');
    eastP.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;
    let messageP = document.createElement('p');
    messageP.innerHTML = `Message: ${message}`;
    document.getElementById('result').appendChild(northP);
    document.getElementById('result').appendChild(eastP);
    document.getElementById('result').appendChild(messageP);
}