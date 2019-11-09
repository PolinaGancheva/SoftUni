function passValidator(pass){
    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;
    let validLength = hasValidLength();
    let validContent = hasValidContent();
    let validDigits = hasAtLeastTwoDigits();
    if(!validLength){
        console.log('Password must be between 6 and 10 characters');
    }
    if(!validContent){
        console.log('Password must consist only of letters and digits');
    }
    if(!validDigits){
        console.log('Password must have at least 2 digits');
    }
    if(validLength && validContent && validDigits){
        console.log('Password is valid');
    }

    function hasValidLength(){
        return pass.length >= 6 && pass.length <= 10;
    }
    function hasValidContent(){

       let lowerCasePass = pass.toLowerCase();
       let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;
       
       for(let i = 0; i < lowerCasePass.length; i++){
            let ascii = lowerCasePass.charCodeAt(i);
            if(isLetter(ascii) || isDigit(ascii)){
               continue;
            }
            return false;
       }
       return true;
    }
    function hasAtLeastTwoDigits(){
        let counter = 0;
        for(let i = 0; i < pass.length; i++){
            let ascii = pass.charCodeAt(i);
            let asciiIsDigit = isDigit(ascii);
            if(asciiIsDigit){
                counter++;
            }
        }
        return counter >= 2;
    }
}
passValidator('logIn');
passValidator('Pa$s$s');