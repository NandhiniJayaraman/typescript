"use strict";
// annatation
var arr = [];
arr.push(1);
console.log(arr);
// type inferance
var arr4 = [1, 2, 3, 4];
arr4.push(89);
console.log(arr4);
console.log(arr4[3]);
// tuples
var arr5;
arr5 = [23, 'nandhini', true];
console.log(arr5);
var rect2 = {
    width: 23,
    height: 45,
    area: 567,
    color: "red"
};
console.log(rect2);
// functions
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
// TS casting
let x = 'hello';
console.log(x.length);
// simple class
class Myclass {
    constructor(x) {
        this.a = x;
    }
}
let o = new Myclass(34);
console.log(o.a);
// class implements interfaces
class Person {
    constructor(name, id) {
        this.getname = () => {
            return this.name;
        };
        this.name = name;
        this.id = id;
    }
}
let ob2 = new Person('nandhini', 123);
console.log(ob2.id);
console.log(ob2.getname());
// // get and set value
// class Myclass2{
//      private _val:string='20'
//      get nans():string{
//         console.log('get')
//         return this._val;
//      }
//      set nans(a1:any){
//         console.log('set');
//         this._val=a1
//      }
//     }
// let o1=new Myclass2()
// console.log(o1.nans);
// o1.nans='50'
// console.log(o1.nans);
