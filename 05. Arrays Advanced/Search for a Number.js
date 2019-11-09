// function solve(firstArr, secondArr){
//     let newArr = firstArr.slice(0, secondArr[0]);
//     newArr.splice(0,secondArr[1]);
//     let result = newArr.filter(num => num === secondArr[2]);
//     console.log(`Number ${secondArr[2]} occurs ${result.length} times.`);
// }
function solve(nums,criteria){
    let count = 0;
    let el = criteria[2];
let arr = nums.slice(0,criteria[0]);
for(let i = 0;i<=arr.length;i++){
    arr.shift(criteria[1]);
    if(arr.includes(el)){
        count++;
        break;
    }
    }
console.log(`Number ${el} occurs ${count} times.`)
}
solve([5, 2, 3, 4, 3,3, 6,3],
    [5, 2, 3]
    )