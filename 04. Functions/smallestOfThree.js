function smallestNum(firstNum,secondNum,thirdNum){
    let smallest = 0;
    if(firstNum <= secondNum && firstNum <= thirdNum){
        smallest = firstNum;
    }else if(secondNum <= firstNum && secondNum <= thirdNum){
        smallest = secondNum;
    }else if(thirdNum <= firstNum && thirdNum <= secondNum){
        smallest = thirdNum
    }
console.log(smallest);
}
smallestNum(2,5,3);
smallestNum(600,342,123);
smallestNum(25,21,4)