function distinctArr(input){
    let distinctArr = [];
    for(let i = 0; i <= input.length; i++){
        let indexOfElem = input.indexOf(input[i]);
        if(i === indexOfElem){
            distinctArr.push(input[i]);
        }
    }
    console.log(distinctArr.join(' '))
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);