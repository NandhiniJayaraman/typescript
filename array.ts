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
// class



