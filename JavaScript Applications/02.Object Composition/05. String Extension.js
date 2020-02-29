(function (){
    String.prototype.ensureStart = function (str){
        if(!this.startsWith(str)){
            return `${str}${this}`
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str){
        if(!this.endsWith(str)){
            return `${this}${str}`
        }
        return this.toString();
    }

    String.prototype.isEmpty = function (){
        return this.toString() === '';
    }

    String.prototype.truncate = function (n){
        if(n < 4){
            return '.'.repeat(n);
        }
        if(n >= this.length){
            return this.toString();
        }else{
            let indexOf = this.substr(0, n - 2).lastIndexOf(' ');
            if(indexOf !== -1){
                return this.substr(0, indexOf).toString() + '...';
            }else{
                return this.substr(0, n - 3) + '...'
            }
        }

    }

    String.format = function(string, ...params){
        params.forEach((el, i) =>{
            string = string.replace(`{${i}}`, el)
        });
        return string;
    }
}())
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
