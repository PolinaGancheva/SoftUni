class List{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    add(elem){
        this.arr.push(elem);
        this.size += 1;
        return this.arr.sort((a,b) => a - b);
    }
    remove(index){
        if (index > -1 && index < this.arr.length) {
           this.arr.splice(index, 1);
           this.size --;
          return this.arr.sort((a,b) => a - b);
        }
        else{
            throw new Error;
        }
    }
    get(index){
        if (this.arr.length > index && index >= 0) {
            return this.arr[index]
        } else {
            throw new Error
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
