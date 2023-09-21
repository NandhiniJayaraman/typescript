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
// class implements interfaces
class Person implements inter1{
    name:string
    id:number

    constructor(name:string,id:number){
        this.name=name
        this.id=id
    }
    getname=()=>{
        return this.name
    }
}
let ob2=new Person('nandhini',123)
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

   


