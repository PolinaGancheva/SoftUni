function solve(str){
    //let words = str.split(/\s+/g); dava 90 s regExa
    let words = str.split(' ').filter(el => el !== '');
    let sum = 0;
    for(let word of words){
        let firstLetter = word[0];
        let lastLetter = word[word.length-1];
        let num = Number(word.substring(1,word.length-1));
        let firstLetterPosition = firstLetter.toLowerCase().charCodeAt(0)-96;
        let secondLetterPosition = lastLetter.toLowerCase().charCodeAt(0)-96;

         if(isUpperCase(firstLetter)){
            num /= firstLetterPosition;
         }
         else if(isLowerCase(firstLetter)){
            num *= firstLetterPosition;
         }
         if(isUpperCase(lastLetter)){
            num -= secondLetterPosition;
         }
         else if(isLowerCase(lastLetter)){
            num += secondLetterPosition;
         }
         sum += num;
       
    }
     console.log(sum.toFixed(2));
   
    function isUpperCase(str) {
        return str == str.toUpperCase();
    }
    function isLowerCase(str) {
        return str == str.toLowerCase();
    }
}
solve('P34562Z q2576f   H456z');