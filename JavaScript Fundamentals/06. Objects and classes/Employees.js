function solve(arr){
    class Person {
        constructor(name,personalNum){
            this.name = name;
            this.personalNum = personalNum;
        }
    }
    let people = [];
    for(let i = 0; i <= arr.length-1; i++){
        let [name,personalNum] = [arr[i],arr[i].length];
        people.push(new Person(name,personalNum));
    }
    people.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.personalNum}`));
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )