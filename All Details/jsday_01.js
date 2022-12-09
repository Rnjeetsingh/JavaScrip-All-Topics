
//     function getname(){
//         var value = document.getElementById("Ranj").value;
//         var newvalue = document.getElementsByClassName("Aasth")[0];
//         newvalue.innerText = value
//     }
 

///////////////////////////////////////////////////////////////////////////////////


//    var value = document.getElementById("Ran")
//    var x = 10;
//    var y = 20;
//    var z = x < y ? "True" : "False";
//    value.innerText = z;

///////////////////////////////////////////////////////////////////////////////////

// calculater Code 


// function cal(){
//     let valuefirst = document.getElementById("first").value;
//     let valueSecond = document.getElementById("second").value;
//     let  selc = document.getElementById("opera").value;
    
//     let finalval;
    
//     if(selc == "+"){
//          finalval = parseInt(valuefirst) + parseInt(valueSecond);
        
//     }
//     if(selc == "-"){
//          finalval = parseInt(valuefirst) - parseInt(valueSecond);
        
//     }
//     if(selc == "*"){
//          finalval = parseInt(valuefirst) * parseInt(valueSecond);
        
//     }
//     if(selc == "/"){
//          finalval = parseInt(valuefirst) / parseInt(valueSecond);
        
    
//     }
//     document.getElementById("result").value = finalval;
     
// }


///////////////////////////////////////////////////////////////////////////////////
   

// Prompt Function 

// function call(){
//     let result = prompt("Please Enter Your Name!","");
//     let data = document.getElementById("name")
//     data.innerText = result;
// }


///////////////////////////////////////////////////////////////////////////////////

//If Or Else Condition

// var result =  document.getElementById("age");
// var age = "17";

// if(age>=18){
//    result.innerText = "You Are  Eligble";
// }
// else if (age == "17"){
//     result.innerText = "Please Wait One More Year";
// }
// else{
//     result.innerText = "You Are Not Eligble";
// }

///////////////////////////////////////////////////////////////////////////////////

// For Loops 


// for(var i = 0; i<10; i++){
//     document.write(i + "<br>");
// }
// document.write("<h1>Loop is End </h1>")

// for(var x = 10; x>=0; x--){
//     document.write(x + "<br>");
// }
// document.write("<h1>Loop is End </h>")


///////////////////////////////////////////////////////////////////////////////////

// While Loops


// var num = 1; 
// while(num<10){
//     document.write(num + "<h1>Ranjet Singh</h1>");
//     num++;
// }

// var nur = 10 ;
// while(nur>=0){
//     document.write(nur + "<h1>Aastha Mishra </h1>");
//     nur--;
// }
  

///////////////////////////////////////////////////////////////////////////////////

// forEeach


// var data = ["Ran1","Ran2","Ran3","Ran4","Ran5"];

// data.forEach(cars);

// function cars(el, i, arr){
//   arr[i] =  [el] + "Aasth"
// }

// data.forEach(call);

// function call(el, i, arr){
//    document.write(i + "=>" +  el + "<br>");

// }


///////////////////////////////////////////////////////////////////////////////////

// continue Statment

// for(var i = 0; i<10; i++){
//     if(i == 5){
//         continue;
//     }
//     document.write(i, "<br>")
// }

// var ran = ["Ranjeet","Sunny", "Rahul", "Himanshu"];

// for(var i = 0; i<ran.length; i++){
//     if(ran[i] == "Ranjeet"){
//         continue;
//     }
//     document.write(ran[i] , "<br>");
// }


///////////////////////////////////////////////////////////////////////////////////

// break Statment;

// for(var i = 0; i<10; i++){
//     if(i == 7){
//         break;
//     }
//     document.write(i, "<br>")
// }

// var ran = ["Ranjeet","Sunny", "Rahul", "Himanshu"];

// for(var i = 0; i<ran.length; i++){
//     if(ran[i] == "Rahul"){
//         break;
//     }
//     document.write(ran[i] , "<br>");
// }

///////////////////////////////////////////////////////////////////////////////////

// switch statement;

// var ran = 5;

// switch(ran){

//     case 2: document.write("The Number is Two");
//     break;

//     case 3: document.write("The Number is Three");
//     break;

//     case 4: document.write("The Number is Four");
//     break;

//     case 5: document.write("The Number is Five");
//     break;

//     case 6: document.write("The Number is Six");
//     break;

//     default: document.write("NO Number are Present");
//     break;
// }


///////////////////////////////////////////////////////////////////////////////////

// Methods List

// 1 => isArray();

//  var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];
 
//  var Arraa = "Raju";

//  let flag = Array.isArray(arr);

//  document.write("<h1>"+flag+"</h1>");

// 2 => valuOf;

//  var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];
 
//  let flag = arr.valueOf();;

//  document.write("<h1>"+flag+"</h1>");

// 3 => join();

//  var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];

//  let flag = arr.join("=>");;

//  document.write("<h1>"+flag+"</h1>");

// 4 => concat();

//  var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];

// var rre = ["Rani", "Roshni", "Karishma", "Shalini", "Pooja"]

// var shop = arr.concat(rre);

//  document.write("<h1>"+shop+"</h1>");

// 5 => indexOf();

//  var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];

// var rre = ["Rani", "Roshni", "Karishma", "Shalini", "Pooja"]

// var shop = arr.concat(rre);

// var inde = shop.indexOf("Karishma")

//  document.write("<h1>"+inde+"</h1>");



///////////////////////////////////////////////////////////////////////////////////

// Method List ;

// 1.push();
// 2.pop();
// 3.slice();
// 4.reverse();
// 5.shift();

// var arr = ["Ram", "Shyam", "Kamla", "Anup", "Ravi"];
// var newarr = document.getElementById("ran").innerText = arr;

// function pus(){
//   let send = prompt("Please Enter Your Name");
//   newarr.push(send);
//   document.getElementById("ran").innerText = newarr
// }


// function popr(){
//   newarr.pop();
//   document.getElementById("ran").innerText = newarr
// }

// function slicer(){
//   let send = prompt("Please Enter The Number")
//   var sliarr = newarr.slice(send);
//   document.getElementById("ran").innerText = sliarr;
// }

// function rever(){
//    let res = newarr.reverse();
//    document.getElementById("ran").innerText = res;
// }

// function shif(){
//    let res = newarr.shift();
//    document.getElementById("ran").innerText = res;
// }


///////////////////////////////////////////////////////////////////////////////////

// Date Method


// var date = new Date();

// function dater(){
// document.getElementById("ran").innerText = date;
// }

// function year(){
// document.getElementById("ran").innerText = date.getFullYear();
// }

// function month(){
//  var mont = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// document.getElementById("ran").innerText = mont[date.getMonth()];
// }


// function hou(){
// document.getElementById("ran").innerText = date.getHours();
// }

// function todat(){
// document.getElementById("ran").innerText = date.getDate();
// }

// function min(){
// document.getElementById("ran").innerText = date.getMinutes();
// }

// function mill(){
// document.getElementById("ran").innerText = date.getMilliseconds();
// }

// function sec(){
// document.getElementById("ran").innerText = date.getSeconds();
// }

// function tim(){
// document.getElementById("ran").innerText = date.getTime();
// }

// function daye(){
//  let dai = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// document.getElementById("ran").innerText = dai[date.getDay()];
// }

///////////////////////////////////////////////////////////////////////////////////

// Typeof Operator

// var a = ["1","2","3"];
// document.write("<h1>"+typeof(a)+"</h1>");

// var b = 1;
// document.write("<h1>"+typeof(b)+"</h1>");

// var c = "Ranjeet Singh";
// document.write("<h1>"+typeof(c)+"</h1>");

// var d = true;
// document.write("<h1>"+typeof(d)+"</h1>");


///////////////////////////////////////////////////////////////////////////////////

//  setInterval();


// function set(){
//     setInterval(function(){
        
//         document.write("<h1>"+"Ranjeet"+"</h1>")
        
//     },
//     1000
//     )
// }

// setTimeout();

// function set(){
//     setTimeout(function(){
//         document.write("<h1>"+"Ranjeet Aastha"+"</h1>")
//     },
//     2000
//     )
// }
   
///////////////////////////////////////////////////////////////////////////////////

// Real Time Clock Project

// function showTime(){
//     var d = new Date();
//     var h = d.getHours();
//     var min = d.getMinutes();
//     var sec = d.getSeconds();
//     let set = h >= 12 ? "PM" : "AM";
    
//     if(h>12){
//         h = h - 12;
//     }
   

//     h = h<10 ? "0"+h : h;
//     min = min<10 ? "0"+min : min;
//     sec = sec<10 ? "0"+sec : sec;

//     var res = (h+":"+min+":"+sec+" "+set);
//     document.getElementById("ranj").innerText = res;
//     setTimeout(showTime,1000);
// }

///////////////////////////////////////////////////////////////////////////////////

// Modify css using javaScript

// function enter(){
//     let d = document.getElementById("aast");
//     d.innerText = "Aastha Mishra"
//     d.style.fontFamily = "Vardana";
//     d.style.color = "blue";
//     d.style.fontSize = "100px";

// }

// function leav(){
//     let d = document.getElementById("aast");
//     d.innerText = "Ranjeet Singh"
//     d.style.fontFamily = "";
//     d.style.color = "red";
//     d.style.fontSize = "";

// }


///////////////////////////////////////////////////////////////////////////////////

// clearTimeout()

// var data;
//     function start(){
//       data =  setTimeout(function(){
//          document.write("<h1>"+"Ranjeet Singh"+"<h1>")
//        },1000) 
//     }
//     function stop(){
//         clearInterval(data);
//         alert("Stop")
//     }

///////////////////////////////////////////////////////////////////////////////////

// setInterval();


// var data = setInterval(count,1000);
// var c = 0;
// function count(){
// document.getElementById("ranj").innerText = c;
// c++;
// }

// function stop(){
//    clearInterval(data);
// }

///////////////////////////////////////////////////////////////////////////////////