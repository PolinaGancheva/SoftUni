function solve(str){
    let wordsCount = {};
    let result = '';
     let words = str.split(' ').map(v => v.toLowerCase());
     for (let word of words) {
        wordsCount[word] = 0;
    }
    for (let currentWord of words) {
        if(wordsCount.hasOwnProperty(currentWord)){
            wordsCount[currentWord]++;
        }
        
    }
    let sortedWords = Object.entries(wordsCount)
    .sort((firstPair, secondPair) => {
        let [firstWord,firstOccurance] = firstPair;
        let [secondWord,secondOccurance] = secondPair;
        return secondOccurance - firstOccurance;
    });

    for (let [word,occurance] of sortedWords) {
        if(occurance % 2 !== 0){
          result += ' '+ word;
         
        }
       
    }
    console.log(result);
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');