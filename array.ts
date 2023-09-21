// annatation
var arr:number[]=[]
arr.push(1)
console.log(arr)
// type inferance
var arr4:number[]=[1,2,3,4]
arr4.push(89)
console.log(arr4)
console.log(arr4[3])
// tuples
var arr5:[number,string,boolean];
arr5=[23,'nandhini',true]
console.log(arr5);
// interfaces
interface rec{
    width:number
    height:number
}
interface rectangular extends rec{
    area:number
    color:string
}
var rect2:rectangular={
    width:23,
    height:45,
    area:567,
    color:"red"
}
console.log(rect2);
// functions
function divide({dividend,divisor}:{dividend:number,divisor:number}){
    return dividend/divisor
}
console.log(divide({dividend:10,divisor:2}))
// TS casting
let x:unknown = 'hello';
console.log((x as string).length)
// simple class
class Myclass{
    a:number
    constructor(x:number){
        this.a=x
    }
}
let o=new Myclass(34)
console.log(o.a)
// interface
interface inter1{
    name:string
    id:number
}
interface inter2{
    city:string,
    phn_num:number
}
// class implements interfaces
class Person implements inter1,inter2{
    name:string='nandhini'
    id:number=23
    city:string='salem'
    phn_num:number=8270328188


    getname=()=>{
         return this.name + this.city + this.id + this.phn_num
    }
}
let ob2=new Person()
// console.log(ob2.id);
console.log(ob2.getname());

class Sample extends Person{
    std:number=12

    print(){
        return this.name + this.std
    }

}
let s=new Sample()
console.log(s.print())









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

   


