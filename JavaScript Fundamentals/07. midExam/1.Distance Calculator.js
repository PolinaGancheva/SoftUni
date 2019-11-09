function solve(arr){
    let stepsMade = Number(arr[0]);
    let stepCm = Number(arr[1]);
    let distance = Number(arr[2]);
    let travellDistance = 0;
    for(let i = 1; i <= stepsMade; i++){
        if(i % 5 === 0){
            travellDistance += stepCm -0.3* stepCm;
        }
        else travellDistance += stepCm;
      
    }
    console.log(`You travelled ${(travellDistance/distance).toFixed(2)}% of the distance!`);
}
// solve([ '100', '2', '1' ]
// );
solve([ '5000', '7.5', '500' ]
);