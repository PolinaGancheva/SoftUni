function solve(arr){
    let sizeOfSide = Number(arr[0]);
    let sheets = Number(arr[1]);
    let areaPerSheet = Number(arr[2]);
    let areaCovered = 0;
    let area = sizeOfSide * sizeOfSide * 6;
    for(let i = 1; i <= sheets; i++){
        if(i % 3 === 0 && i !== 0){
            areaCovered +=  0.25 * areaPerSheet;
            
        }
        else{
            areaCovered += areaPerSheet;
        }
        
    }
    console.log(`You can cover ${((areaCovered/area)*100).toFixed(2)}% of the box.`);
}
solve([ '5', '30', '4' ]
)