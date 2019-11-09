function solve(str){
    let asciSym = str.charCodeAt();
    if(asciSym >= 65 && asciSym <= 90){
        console.log('upper-case');
    }
    else if(asciSym >= 97 && asciSym <= 122){
        console.log('lower-case');
    }
}
solve('L');