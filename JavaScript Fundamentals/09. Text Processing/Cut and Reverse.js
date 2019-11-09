    function solve(str){
        let firstWord = str.substring(0,str.length/2);
        let secondWord = str.substring(str.length/2, str.length);
        
       function reverseStr(word){
            let result = '';
            for(let j = word.length-1; j >=0 ; j--){
                result += word[j];
             }
             console.log(result);
       }
       reverseStr(firstWord);
       reverseStr(secondWord);
       
        
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')