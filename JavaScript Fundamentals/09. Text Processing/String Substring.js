function solve(word, sentence){
        if(sentence.toLowerCase().includes(word)){
            console.log(word);
        }
        else{
            console.log(`${word} not found`);
        }

}
solve('javascript',
'JavaScript is the best programming language'
);
solve('python',
'JavaScript is the best programming language'
)