function solve(arr){
    let paintingNums = arr.shift();
    paintingNums = paintingNums.split(' ').map(Number);
    arr.forEach((line) => {
        let tokens = line.split(' ');
        let command = tokens[0];
        if(command === 'Change'){
            let paintingNum = Number(tokens[1]);
            let changedNum = Number(tokens[2]);
            if(paintingNums.indexOf(paintingNum) !== -1){
                paintingNums.splice(paintingNums.indexOf(paintingNum), 1, changedNum);
            }
        }
        else if(command === 'Hide'){
            let paintingNum = Number(tokens[1]);
            if(paintingNums.includes(paintingNum)){
                paintingNums.splice(paintingNums.indexOf(paintingNum), 1);
            }
        }
        else if(command === 'Switch'){
            let paintingNumFirst = Number(tokens[1]);
            let paintingNumSecond = Number(tokens[2]);
            let storeFirstIndex = paintingNums.indexOf(paintingNumFirst);
            let storeSecondIndex = paintingNums.indexOf(paintingNumSecond);
         
            if(paintingNums.includes(paintingNumFirst) && paintingNums.includes(paintingNumSecond)){
                paintingNums[storeFirstIndex] = paintingNumSecond;
                paintingNums[storeSecondIndex] = paintingNumFirst;
        }
    }
        else if(command === 'Insert'){
            let place = Number(tokens[1]);
            let paintingNum = Number(tokens[2]);
            if(place >= 0 && place <= paintingNums.length){
                paintingNums.splice(place+1, 0, paintingNum);
            }
        }
        else if(command === 'Reverse'){
            paintingNums = paintingNums.reverse();
        }

    });
    console.log(paintingNums.join(' '));
}
solve([
  '115 115 101 114 73 111 116 75',
  'Insert 5 114',
  'Switch 116 73',
  'Hide 75',
  'Reverse ',
  'Change 73 70',
  'Insert 10 85',
  'END'
])
// solve([
//     '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
//     'Insert 5 32',
//     'Switch 97 78',
//     'Hide 88',
//     'Change 120 117',
//     'END'
//   ])