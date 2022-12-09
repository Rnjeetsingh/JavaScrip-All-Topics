
1.alert();
2.confirm();
3.document.write();
4.prompt();


1.alert();
<!-- <script type="text/javascript">
   alert("Welcome To WsCube");
</script>


2.confirm();
<script type="text/javascript">
   alert("Login to WsCube");
</script>

3.document.write();
<script type="text/javascript">
   document.write("<h1> Welcome To WsCube </h1>");
</script>

4.prompt(msg, default);
<script type="text/javascript">
   prompt("Hello, WsCube");
</script> -->


//////////////////////////////////////////////////////////

Variable In JavaScript.

Two type of Variable in JavaScript 
Local Scop & Global Scop
..Local Scop is used only we can acces inside our Functon not to define outside the function.
..Global Scop we can acces inside the function or any were just we need to declare our variable Globaly.

////////////////////////////////////////////////////////////////////

DOM(Document Object Method)

document.getelementById(name);
document.getelementByClassName(name);
document.getElementsByName(name);
document.getElementsByTagName(h1);
document.querySelactor(#name or .name or Tagname);
document.querySelactorAll(#name or .name or Tagame);
innerHTML();

//////////////////////////////////////////////////////////////////////

JavaScript String Concatination 

var x = "HEllo";
var y = "Everyone";
var z = x+y;
console.log(z)
O/P = Hello Everyone

//////////////////////////////////////////////////////////////////////

Types of Operator in JavaScripts

1.Arithmetic Operator = +, -, /, %, ++, --;
2.Logical Operator = &&, ||;
3.Ternarry Operator = <conditon> ? <true> : <false>;
4.Assignment Operator = =, +=, -=, *=, /=, %=;
5.Comparison Operator = ==, !=, >, <, >=, <=;

///////////////////////////////////////////////////////////////////////

Function 

Type of Function 
1.Pre defined 
2.User defined

Without parameters function Syntax
function Nameoffunction() {
}

Parameters function Syntax
function Nameoffunction(a,b) {
}

1.Creat a function which is get the user Name onclick.
2.Creat a function which is work same like Calculater.

///////////////////////////////////////////////////////////////////////

Prompt

We use prompt function when we need to feedback
or any type of data form user.
prompt("Enter Your Name!","");

///////////////////////////////////////////////////////////////////////

IF or Else Conditions in js

///////////////////////////////////////////////////////////////////////


What is an Array

It is a used to store multiple values into a single variable.

Array is a group of continuos memory locations.

Syntax.
1. var cars = [];
2. var cars = nes Array();

///////////////////////////////////////////////////////////////////////

What is Loop?

For Loop:

A loop is used to repeat a block of code until the specified condition is met.

When similar task is needed to be done again and again.

Save time  and leadss to code reusability.

While Loop:

It's also called entry control loop.

while(expression) {

}


///////////////////////////////////////////////////////////////////////

What is a forEach loop ?

.A forEach loop (method) is used to get data from JS array or object.

.The method calls a function once for each element in array, in order.

var cars = ["car1", "car2", "car3","car4"];

cars.forEach(myfunction);

function myfunction(item, index, array){

}

item = (her "car1");required parameter
index = (here 0 for "car1") optional
array = (here cars) optional


///////////////////////////////////////////////////////////////////////

Continue Statement?

The continue statement is used to skip the current iteration and go to next iteration.

Syntax : continue;

for(var i = 0; i<10; i++){
     if(i == "5"){
      continue;
}
}

///////////////////////////////////////////////////////////////////////

.The break statement is used to break the execution of current loop or switch case.

.As soon as it is encountered the flow program goes to next statement of loop or switch case.


Syntax : break;

for(var i = 0; i<10; i++){
     if(i == "5"){
      break;
}
}

///////////////////////////////////////////////////////////////////////

switch statement?

Switch statement is used to choose in between many cases.

It works same as nested if-else statement.

Syntax : 

var i = 4;
switch(i){
case 1:console.log("One");
break;
}


///////////////////////////////////////////////////////////////////////

Important Array Method in JavaScript

List of Methods

1.valueOf(); => To print the data of array.
2.isArray(); => Check if the variable is an array or not?
3.concat(); => join several arrays into one .
4.indexOf(); => returns the primitive value of the specified object.
5.join();  => Combine elements of an array into asingle string and return the string.
6.pop(); =>  Removes the last element of an array.
7.push(); => Add a new element at the end.
8.reverse(); => Sort elements in descendig order.
9.shift();  => Remove the first element of an array.
10.slice();  => Pulls a copy of a portion of an array into a new array.

///////////////////////////////////////////////////////////////////////

Date Method 

1.Date(); => To get the current date and time details according to the brower.
2.getFullYear(); => Get the year as a four digit number (yyyy).
3.getMonth(); => Get the month as a number (0-11).
4.getDate(); => Get the day as a number (1-31).
5.getHours(); => Get the hour (0-23).
6.getMinutes(); => Get the minute (0-59).
7.getSeconds(); => Get the second (0-59).
8.getMilliseconds(); => Get the millisecond (0-999).
9.getTime(); => Get the time (milliseconds since January 1, 1970).
10.getDay(); => Get the weekday as a number (0-6).

///////////////////////////////////////////////////////////////////////

Typeof operator in JavaScript.
 
syntex: typeof();
1.number.
2.string.
3.boolean.
4.object

///////////////////////////////////////////////////////////////////////

Events in JavaScript.

1.In programming event is an occurrence of any action.
2.When we use JavaScript in HTML pages, JavaScript can "raact" with events.
3.Eg= When user click the mouse button, or press any key on the keyboard.


1.onclick => The event occurs when the user clicks on an element
2.oncontextmenu => User right clicks on an element to open a context menu.
3.ondblclick => The user double clicks on an element.
4.onmousedown => User presses a mouse button over an element.
5.onmouseenter => The pointer moves onto an element.
6.onmouseleave => Pointer moves out of an element.
7.onmousemove => The pointer is moving while it is over an element.
8.ommouseover => When the pointer is moved onto an element or one of its children.
9.onmouseout => User moves the mouse pointer out of an element or one it's children.
10.onmouseup => The user releases a mouse button while over an element.
11.onkeydown => When the user is pressing a key down.
12.onkeypress => The moment the user starts prssing a key.
13.onkeyup => The user releases a key.


Form Events.

1.onblur => When an element loses focus.
2.onchange => The content of a from element chages.
3.onfocus => An element gets focus.
4.oninput => Usr input on an element.
5.oninvalid => an element is invalid.
6.onreset => A form is reset.
7.onsearch => The user writes something in a search field.
8.onselect => The user selects some text.
9.onsubmit => A form is submitted.
10.onload => When document is fully loded.


///////////////////////////////////////////////////////////////////////

setInterval() in JavaScript.

1.The setInterval() method repeats a given function at every given time-interval.
2.Syntax: window.setInterval(function, milliseconds);
3.function: first parameter is the function to be executed.
4.milliseconds: indicates the length of the time-interval between each execution.

///////////////////////////////////////////////////////////////////////

setTimeout() in JavaScript.

1.The setTimeout() method executes a function after waiting a specified number of milliseconds.
2.Syntax: window.setTimeout(function,milliseconds);
3.function: first parameters is the function to be executed.
4.milliseconds: indicates the number of milliseconds before execution takes place. 1sec = 1000ms.

///////////////////////////////////////////////////////////////////////

Real Time Clock Project 

///////////////////////////////////////////////////////////////////////

Modify Css using JavaScript.

///////////////////////////////////////////////////////////////////////

clearTimeout method

1.The clearTimeout() method clears a timer set with the setTimeout() method.
2.The ID value returned by setTimeout is used as the parameter for the clearTimeout() method.
3.myVar = setTimeout("function",milliseconds);
4.clearTimeout(myVar);

///////////////////////////////////////////////////////////////////////

clearInterval method

1.The clearInterval() method clears a timer set with the setInterval() method.
2.The ID value returned by setInterval() is  used as the parameter for the clearInterval() method.
3.myVar = setInterval("function",milliseconds).
4.clearInterval(myVar);

///////////////////////////////////////////////////////////////////////



DOM (Document Object Modle) In JavaScript.

Open and close a new window using JavaScript Window DOM | Open() and Close().


///////////////////////////////////////////////////////////////////////

History Object In javaScript.

1.The history object contains the URLs visited by the user (within a browser window).
2.The  history object is part of the  window object and is accessed through the window history property.
3.All the major browser supports it .

1.back() => Loads the previous URL in the history list 
syntax: window.history.back();

2.forward() => Loads the next URL in the history list.
syntax: window.history.forword();

3.go() => Loads a specific URL from the history list.
syntax: window.history.go();

///////////////////////////////////////////////////////////////////////

Window screen object in JavaScript.

1.availHeight => Return the height of the screen (excluding the windows Taskbar).
Syntax: screen.availHeight;

2.avilWidth => Returns the width of the screen (excluding the windows Taskbar).
Syntax: screenavailWidth;

3.colorDepth => Returns the bit depth of the color palette for displaying.
Syntax: screen.colorDepth;

4.height => Return the total height of the screen.
Syntax: screen.height;

5.pixelDepth => Returns the color resolutin (in bits per pixel) of the screen.
Syntax: screen.pixelDepth;

6.width => Returns the total width of the screen.
Syntax: screen.width;

///////////////////////////////////////////////////////////////////////

Math object

1.The math object contains some predefined mathematical methods.
2.These methods are used to perform mathematical calculation on numerical values.
3.To access these methods Math.keyword is used.













