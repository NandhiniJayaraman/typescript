// // normal function
// function sum(a:number,b:number):number{
//     var c=a+b
//     return c
// }
// // default function
// console.log(sum(2,3))
// function sum1(a:number=23,b:number=23):number{
//     var c=a+b
//     return c
// }

// console.log(sum1())
// function sum2(a:number=987.98,b:number):number{
//     var c=a+b
//     return c
// }
// console.log(sum2(undefined,34.98))
// // optinal arguments
function sum4(a:number,b:number,c?:number):number{
    if(typeof c !== 'undefined')
    {
        return a+b+c;
    }
    return a+b;
}
console.log(sum4(1,2,3))