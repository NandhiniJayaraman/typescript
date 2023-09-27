function add(){
    let  m=Number(document.getElementById("input1").value);
    var n=Number(document.getElementById("input2").value);
    c=m+n
    console.log(c);
    var resulr=document.getElementById("result")
    resulr.innerHTML=c
    
}
function sub(){
    var m=Number(document.getElementById("input1").value);
    var n=Number(document.getElementById("input2").value);
   c=m-n
   console.log(c);
   var resulr=document.getElementById("result")
   resulr.innerHTML=c
}
function mul(){
    var m=Number(document.getElementById("input1").value);
    var n=Number(document.getElementById("input2").value);
   c=m*n
   console.log(c);
   var resulr=document.getElementById("result")
   resulr.innerHTML=c
}
function div(){
    var m=Number(document.getElementById("input1").value);
    var n=Number(document.getElementById("input2").value);
   c=m/n
   console.log(c);
   var resulr=document.getElementById("result")
   resulr.innerHTML=c
}
function clea(){
    var new1 =document.getElementById("input1");
    new1.value=''
    var new2 =document.getElementById("input2");
    new2.value=''
    var resulr= document.getElementById("result")
    c=0
    resulr.innerHTML=c
}
