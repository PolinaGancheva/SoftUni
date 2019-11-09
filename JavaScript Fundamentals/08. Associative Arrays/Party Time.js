function solve(input){
    let guests = {
        regular:[],
        vip:[]
    }
    let index = input.indexOf('PARTY');
    let invites = input.splice(0,index);
    let camePpl =  input.splice(1, input.length-1);
    for (const guest of invites) {
        if(isNaN(Number(guest[0]))){
            guests['regular'].push(guest);
        } else {
            guests['vip'].push(guest);
        }
    }
    for (const guest of camePpl) {
        if(isNaN(Number(guest[0]))){
            let indexOfRegular = guests['regular'].indexOf(guest);
            guests['regular'].splice(indexOfRegular,1)
        }
        else{
            let indexOfVip = guests['vip'].indexOf(guest);
            guests['vip'].splice(indexOfVip,1)
        }
    }

    console.log( guests['regular'].length + guests['vip'].length);
    console.log( guests['vip'].join('\n'));
    console.log( guests['regular'].join('\n'));

}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
// solve(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]
// )