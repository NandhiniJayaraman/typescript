"use strict";
var any1;
var num1;
var num2 = 2;
var num3 = 3;
var num4 = num3 + 100;
var str1 = 'some string';
var nothappy = str1 + 'string';
// number
var a = 10;
console.log(a);
// string
var username;
username = 'nandhini';
console.log(username);
// boolean
var s1 = true;
console.log(s1);
// undeifned
var s2;
// console.log(s2)
// union
var s3;
s3 = 1;
s3 = 'nandhini';
console.log(s3);
// array
var arr;
arr = [1, 2, 3, 4];
console.log(arr);
// combined array and datatype
var arr1;
arr1 = ['nandhini', 'uma', 'sarath'];
// arr1=12
console.log(arr1);
// object
var s5;
s5 = {
    name: 'nandhini', age: 20
};
console.log(s5);
console.log(s5.name);
console.log(s5.age);
// direct assigning object value
var s6 = {
    name: 'nandhini',
    age: 22
};
console.log(s6);
// array object
var arrobj1;
arrobj1 = [{ name: 'uma', age: 25 }, { name: 'suriya', age: 21 }, { name: 'vishwa', age: 22 }, { name: 'dennis', age: 23 }];
console.log(arrobj1);
console.log(arrobj1[0].name);
console.log(arrobj1[1].age);
arrobj1.forEach(e => {
    if (e.age > 23) {
        console.log(e.name);
    }
});
