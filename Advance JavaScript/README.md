Different type of Variable In ES6 :

1.Var  
Global Scope.
Var x = "Hello"; => We can declare  the variable.
Var x = "World"; => We can reassigned the variable.
 x = "WoW";  => We can change the value. 

2.let   
Block Scope.
let  x = "Hello"; => We can declare  the variable.
let  x = "World"; => Wrong We cannot reassigned the variable.
 x = "WoW";  => We can change the value. 


3.const   
Block Scope.
const  x = "Hello"; => We can declare  the variable.
const  x = "World"; => Wrong We cannot reassigned the variable.
 x = "WoW";  => Wrong We cannot change the value. 

////////////////////////////////////////////////////////////////////////////////////////////////////////

Template String or Template Literals.

var user = "Yahoo Baba";

var greet = `Hello ${user}`;


////////////////////////////////////////////////////////////////////////////////////////////////////////

Arrow Functions;

 let hello = () => {
   console.log("Ranjeet Singh");
  }
  
hello(); 


////////////////////////////////////////////////////////////////////////////////////////////////////////


Rest Operators;

Function with Multiple Arguments.

Syntax : ...args

function (name,...args){

let sum = 0;

for(let i in args){
sum+= args[i];
}

console.log(sum);
console.log(name);

}


////////////////////////////////////////////////////////////////////////////////////////////////////////

Spread Operator.

let arr = [20,30,50,45,60];
let name = "Ranjeet";
let last = "Singh";

syntax: sum(name, last,  ...arr);

////////////////////////////////////////////////////////////////////////////////////////////////////////

Object Literals:

1.let name = "Ranjeet Singh";

let obj = {
        name
        };
console.log(obj);

2.Use Variable as a Property  Name.

let n = "name";

let obj = {
       [n]: "Ranjeet Singh";
       };
3.New function Syntax

 let obj = {
        name: "Ranjeet Singh",
        show(){
          return ` ${this.name}`
           }
          }
         console.log(obj.show());

4.Object return function 

let name = "Ranjeet";
let last = "Singh";

     function Student(name, lastname){
       return {name, lastname};
    }
  console.log(student(name,lastname));

    
////////////////////////////////////////////////////////////////////////////////////////////////////////

Destructuring Array.

Defalult Array .

let user = ["Yahoo Baba",26];
let name = user[0];
let age = user[1];

In Destructuring : let [name,age] = user;
   

////////////////////////////////////////////////////////////////////////////////////////////////////////


Destructuring Object.

Syntax: let user = {
                name: "Ranjeet",
                age: 21
               };

    Destructuring =>        let {name, age} = user;

////////////////////////////////////////////////////////////////////////////////////////////////////////
   
What is OOP

Object Oriented Programming.

syntax:  class hello{
                 message(){
                    console.log("Hello Everyone");
                     }
                   }
              let a = new hello();
                  a.message();
 

Type of Methods:

1.Constructor:
Syntax: constructor(){
              console.log("Hello World");
              }
2.Prototype
Syntax: message(){
           console.log("Hello World")
              }
3.Static
Syntax:  static name(){
              console.log("Hello World")
             }

////////////////////////////////////////////////////////////////////////////////////////////////////////

What is Inheritance.

Syntax:  clas fruits{
                   //Properties & Method;
                }

           class vegetables extends fruits{
                                  //Properties & Method;
                                 }

             let f = new fruits();
             let v = new vegetables();


////////////////////////////////////////////////////////////////////////////////////////////////////////

What is Modules.

1.File1.js

export let name = "Yahoo Baba";

export function hello{
              }

export class user{
            }

2.File2.js

import {name} from './File1.js'


import {hello} from './File1.js'


import {user} from './File1.js'

console.log(name);

hello();

let a = new user();

<!-- <script type="module" src ="./File2.js"></script> -->

////////////////////////////////////////////////////////////////////////////////////////////////////////



 