function solve(arr){
    let sentence = arr[0].split(/\b/);
    // split(/\b/) - regEx for spliting , i . from the words (The word boundary \b matches 
    //positions where one side is a word character (usually a letter, digit or underscore—
    //but see below for variations across engines) and the other side is not a word character (for instance, it may be the beginning of the string or a space character))
    let words = arr[1];
    //console.log(words);
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < sentence.length; j++){
            if(sentence[j].length === words[i].length && sentence[j].startsWith('_')){
                sentence[j]= (words[i]);
            }
        }
    }
    console.log(sentence.join(''));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);