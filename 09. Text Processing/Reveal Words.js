function solve(words,sentence){
    // let wordLength = 0;
    // let arr = words.split(', ');
    // let sentenceArr = sentence.split(' ');
    // for(let i = 0; i < arr.length; i++){
    //     wordLength = arr[i].length;
    //     for(let j = 0; j < sentenceArr.length; j++){
    //         if(sentenceArr[j].startsWith('*') && sentenceArr[j].length === wordLength){
    //             sentenceArr[j] = arr[i];
    //         }
    //     }
    // }
    // console.log(sentenceArr.join(' '));
    let wordsArr = words.split(', ');
    wordsArr.forEach((word) => {
        sentence = sentence.replace('*'.repeat(word.length),word);
 
});
console.log(sentence);
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'

)