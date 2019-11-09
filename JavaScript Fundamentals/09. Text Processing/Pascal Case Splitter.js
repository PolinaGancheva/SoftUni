function solve(str){
    let result = '';
    for(let i = 0; i < str.length; i++){

        if(str[i] !== str[i].toLowerCase() && i !== 0){
            result += ' '+ str[i];
        }
        else{
            result += str[i];
        }
    }
    console.log(result.split(' ').join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');