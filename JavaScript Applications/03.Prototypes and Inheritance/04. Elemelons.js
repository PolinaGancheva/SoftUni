function solve(){
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error('Abstract class cannot be instantiated directly.')
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
      
    }
    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
        get elementIndex(){
            return  this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
        get elementIndex(){
            return  this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
        get elementIndex(){
            return  this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
         get elementIndex(){
            return  this.weight * this.melonSort.length;
        }
        toString(){
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    class Melolemonmelon extends Airmelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.counter = 0;
            this.arr = [Watermelon, Firemelon, Earthmelon, Airmelon]
        }
        morph(){
            this.toString = function () {
                return new this.arr[this.counter % 4](this.weight, this.melonSort).toString()
            };
            this.counter++;
            return this;
        }
 
        toString() {
            let str = 'Water';
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon}
}

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
