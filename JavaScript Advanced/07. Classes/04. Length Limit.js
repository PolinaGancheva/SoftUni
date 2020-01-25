class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = Number(length);
    }
    increase(length){
        return this.innerLength += length;
    }
    decrease(length){
        return this.innerLength = Math.max(0, this.innerLength - length);
   
    }
    toString(){
        if(this.innerString.length > this.innerLength){
            return `${this.innerString.substring(0, this.innerLength) + '...'}`
        }else{
            return `${this.innerString}`
        }
        
    }
}
let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

test.decrease(6);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
