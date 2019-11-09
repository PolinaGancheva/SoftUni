function solve(input){
    for(let num of input){
        console.log(isPalindrome(num))
    }
    function isPalindrome(num){
        let reversedNum = '';
        let numAsString = num.toString();
        for(let i = numAsString.length - 1; i >= 0; i-- ){
            reversedNum += numAsString[i];
        }
        return numAsString === reversedNum;
    }
}

solve([123,323,421,121]);