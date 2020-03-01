function solve(){
    class Employee{
        constructor(name, age){
            //prevents direct instantiation
            if(new.target === Employee){
                throw new Error('Cannot instantiate directly.')
            }
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }
        work(){
                let currentTask = this.tasks.shift();
                console.log(this.name + currentTask);
                this.tasks.push(currentTask);
        }
        collectSalary(){
            console.log(`${this.name} received ${this.getSalary} this month`)
        }
        getSalary(){
            return this.salary;
        }
    }
    
    class Junior extends Employee{
        constructor(name, age){
            super(name,age);
            this.tasks.push('is working on simple task.')
        }
    }
    
    class Senior extends Employee{
        constructor(name, age){
            super(name,age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }
    }
    
    class Manager extends Employee{
        constructor(name, age){
            super(name,age);
            this.divident = 0;
            this.tasks.push('scheduled a meeting');
            this.tasks.push('is preparing a quarterly report.');
        }
        getSalary(){
            return this.salary + this.divident;
        }
    }
    return {Employee, Junior, Senior, Manager}
}
// function solve(){
//     function Employee(name, age){
//         if(new.target === Employee){
//             throw new Error('Cannot instantiate directly.')
//         }
//         this.name = name,
//         this.age = age,
//         this.salary = 0,
//         this.tasks = []
//     }
//     Employee.prototype.work = function() {
//         let currentTask = this.tasks.shift();
//         console.log(this.name + currentTask);
//         this.tasks.push(currentTask);
//       };
//       Employee.prototype.collectSalary = function() {
//         console.log(`${this.name} received ${this.getSalary} this month`)
//       };
//       Employee.prototype.getSalary = function() {
//         return this.salary;
//       };

//       Object.setPrototypeOf(Junior, Employee);
//       Junior.prototype.constructor = Junior;
      
//       function Junior(name, age){
//         Junior.call(this, name, age);
//           this._text = text;
//           Object.defineProperty(this, 'text', {
//               get: function (){
//                   return this._text;
//               }
//           })
//       }

// }