function oddAndEvenSum(num){
    num = num.toString();
    let oddSum = 0; 
    let evenSum = 0;

    for(let i = 0; i < num.length; i++){
        let digit = Number(num[i]);
        if(isOdd(digit)){
            oddSum += digit;
        }
        if(isEven(digit)){
            evenSum += digit;
        }
    }
    function isOdd(n){
        return n % 2 !== 0;
    }
    function isEven(n){
        return n % 2 === 0;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);