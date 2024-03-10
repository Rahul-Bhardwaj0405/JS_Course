// alert('Hello Fucker!!');

// console.log('Hello World');

// console.error('This is an error');

// console.warn('This is a warning');

// Variables: var,let and const.var has been used since the beginniing of javascript ,but now, we have "const" and "let" we don't use it any-more fequently.
// because "var" is globally scoped."let" and "const" has block level scope.
// The difference b/w "let" and "const" is, with "let" you can reassign values.eg,

// let age = 30;
// age = 23;
// console.log(age); 

// const age = 30;
// age=23;
// console.log(age); Error will show on console. Means const values can't be reassigned.

// When to use "let" or "const": Always use "const" unless you want to reassign the values.

//*********************DATA TYPES*************************************/

// Primitive datatypes means data is directly assigned to memory: Strings, boolean, Numbers,null, undefined.

// const name = 'Rahul';
// const age = 27;
// const rating = 4.5
// const isCool = true;
// const x = null;
// const y = undefined   //or let y; both means the same "y" is undefined.

console.log(typeof y);

//**********************STRINGS************************************** */

const name = 'Rahul';
const age = 27;
console.log('my name is' +name + 'and age is'+age);   //Concatenation
//Template strings or literals:
console.log(`My name is ${name} and age is ${age}`);
//Strings properties and methods: A property doesn't have parentheseis().

const s = 'Hello World!';
console.log(s.length)
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const r = 'technology, computers, it, code';

console.log(r.split(', '));

// **********************ARRAYS*******************

// Arrays are basically variables that hold multiple values.Couple of ways to use "arrays"

// using arrays constructors:
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// But, most part we use below concept to create array. In javascripts you can have different datatype in same array.

// const fruits = ['orange', 'apple', 'grapes', 'cherry', 10, true];
// fruits[6] = 'Kiwi'; // if you want to add somethings in last of array ,this is not the correct way as we don't know how many elememts are athere in arrray . so use push() method.
// fruits.push('mangoes');

// // If you want something to add on the beginning of array use unshift() method.
// fruits.unshift('strawberries');

// // If you want to take out the last elment out of array use "pop()"method.
// fruits.pop();

// // if you want to check if element is in array or not.
// console.log(Array.isArray('apple'));

// If you want the index of certain value.
// console.log(fruits.indexOf('orange'));
// console.log(fruits);


//****************************OBJECT LITERALS**************** */

//Object literals are basically "key-value" pairs.eg:

// const person = {
    //     firstName:'Rahul',
    //     latName:'Bhardwaj',
    //     age:27,
    //     hobbies:['music','travelling','movies','guitar-playing'],
    //     address:{
    //         street:'Gulab nagar',
    //         city:'Bilaspur',
    //         state:'chhattisgarh'
    //     }
    // }
    
    // console.log(person.firstName, person.latName);
    // console.log(person.hobbies[2]);
    // console.log(person.address.city);
    
    // const {firstName, latName, address:{city}} = person;
    
    // console.log(firstName);
    // console.log(city);
    
    // person.email ='rahul405@gmail.com';
    // console.log(person);


    // Array of objects:

// const todos = [
//     {
//         id: 1,
//         text:'Take out trash',
//         isCompleted:true
//     },
//     {
//         id: 2,
//         text:'Meeting with boss',
//         isCompleted:true
//     },
//     {
//         id: 3,
//         text:'Dentist appointment',
//         isCompleted:false
//     },

// ];

// console.log(todos);
// console.log(todos[1].text)

/// JSON*************: Json is a data format and it's used a lot within full stack development and  in using API when you are sending data
// to a server you usually send in json format and recieve in json format and its very similat to object literals.
//Json conversion:

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON); // This is how we send and recieve data to or from the server.


//****************FOR LOOPS ***************/


// const todos = [
//     {
//         id: 1,
//         text:'Take out trash',
//         isCompleted:true
//     },
//     {
//         id: 2,
//         text:'Meeting with boss',
//         isCompleted:true
//     },
//     {
//         id: 3,
//         text:'Dentist appointment',
//         isCompleted:false
//     },

// ];

// for(let i=0;i<10;i++){
//     console.log(`For loop number ${i}`);
// }


//******WHILE LOOP********************* */

// let i = 0;
// while(i<10){
//     console.log(`While loop number ${i}`);
//     i++;
// }

// *******************************


// const todos = [
//     {
//         id: 1,
//         text:'Take out trash',
//         isCompleted:true
//     },
//     {
//         id: 2,
//         text:'Meeting with boss',
//         isCompleted:true
//     },
//     {
//         id: 3,
//         text:'Dentist appointment',
//         isCompleted:false
//     },

// ];

// for(let i=0;i<todos.length;i++){     // This is not the correct way to loop through the array.
//     console.log(todos[i].text);
// }


//Another way to loop through the array."for of" loop example below:

// for(let todo of todos){
//     console.log(todo);
//     console.log(todo.id);
// }

// for each, map, filter .Recommended way to loop through the array.

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// const todoText =todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);


// const todoCompleted =todos.filter(function(todo){
//     return todo.isCompleted == true;
// });

// console.log(todoCompleted);


// const todoCompleted =todos.filter(function(todo){
//     return todo.isCompleted == true;
// }).map(function(todo){
//     return todo.text;
// });

// console.log(todoCompleted);

// ****************CONDITIONALS******************

// const x = '10';
// if(x === 10){     //"==" matches the value not data type.but, if we use "===" then , it matches both data types and value .
//     console.log('x is 10');
// }else{
//     console.log('x is not 10')
// }

// const x = '10';
// if(x == 10){     //"==" matches the value not data type.but, if we use "===" then , it matches both data types and value .
//     console.log('x is 10');
// }else{
//     console.log('x is not 10')
// }

// const x = 20;
// if(x === 10){     //"==" matches the value not data type.but, if we use "===" then , it matches both data types and value .
//     console.log('x is 10');
// } else if(x>10) {
//     console.log('x is greater than 10')
// }
// else{
//     console.log('x is less than 10')
// }

// **********OR CONDITION*****
// const x = 9;
// const y = 10;
// if(x >5 || y >10){     
//     console.log('x is 10');
// }


//************&& CONDITION */

// const x = 9;
// const y = 11;
// if(x >5 && y >10){     
//     console.log('x is 10');
// }

//*** TENARY OPERATOR*** */

// const x = 10;
// const color = x > 10? 'red':'blue';
// console.log(color);

// ***SWITCHES CONDITION*****
// const color ='green';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Neither both of them');
//         break;
// }


//***FUNCTIONS*************** */

// function addNums(num1,num2){
//     console.log(num1+num2);
// }
// addNums();

// function addNums(num1=1,num2=1){
//     console.log(num1+num2);
// }
// addNums();

// function addNums(num1=1,num2=2){
//     console.log(num1+num2);
// }
// addNums(5,6);

// function addNums(num1,num2){
//     return num1+num2;
// }
// const num = addNums(5,5);
// console.log(num);

// *******ARROW FUNCTION*****************

// const addNums = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addNums(6,8));

//Same example as above but without return statement.

// const addNums = (num1,num2) => num1+num2;
// console.log(addNums(4,8));

// const addNums = num1 => num1 +6;
// console.log(addNums(8)); // It is useful especially forEach loop.

//Object Oriented Programming*****

// We can construct object using constructor function and there is two ways to do it : constuctor function with prototype and ES6 classes.
// When you create constructor function it should start with capital lettter as below example.

//Constructor function
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob); //With-out date constuctor => this.dob=dob;
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} and ${this.lastName}`
    }
}
//Using "this" keyword we can access the object property.

//Instantiate object
const person1 = new Person('Rahul', 'Bhardwaj', '04/05/1997');
// const person2 = new Person('Hemu','Bhardwaj','06/12/1998');

// console.log(person1);
// console.log(person2);
// console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);



//****Using the prototype */

// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob); //With-out date constuctor => this.dob=dob;
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} and ${this.lastName}`;
// }

// const person1 = new Person('Rahul', 'Bhardwaj', '04/05/1997');

// const person2 = new Person('Hemu','Bhardwaj','06/12/1998');

// console.log(person2.getFullName());
// console.log(person1);

// Constructor function using classes.


//class . The best way to do it. We also call this "syntaxing sugar".

// class Person {
//     constructor(firstName,lastName,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
//     }

// getBirthYear(){
//     return this.dob.getFullYear();

// }
// getFullName(){
//     return `${this.firstName} and ${this.lastName}`;

// }
// }

// const person1 = new Person('Rahul', 'Bhardwaj', '04/05/1997');

// const person2 = new Person('Hemu','Bhardwaj','06/12/1998');

// console.log(person2.getFullName());
// console.log(person1);

// console.log(window); // window object is the parent object of the browser

// DOM :
// DOM is a document object model. it's basically like a tree structure of your whole documents, means your HTML tags and stuff like that.

// Selecting things from the DOM, we can actually take HTML  elements and put them into variables and stuff like that(work with them) :

//1.Single element selectors:
// console.log(document.getElementById('my-form'));     //same below
// console.log(document.querySelector('.container')); //Query selector works same same jquery for most of the part.
// console.log(document.querySelector('h1'));
// const form = document.getElementById('my-form');
// console.log(form);

//2.Multiple element selectors:

// console.log(document.querySelectorAll('.item')); //What this  gives us is something called the "Nodelist" which is very similar to a array.Infact we can do array methods on it.ex,forEach loop.
// const items = document.querySelectorAll('.item');

// items.forEach((item)=> console.log(item));

//****MANUPUlating the things in DOM or Changing */

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello </h1>';

// const btn = document.querySelector('.btn');
// btn.style.background ='red';

//**EVENTS *** */


const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     // console.log('click');
//     // console.log(e);
//     // console.log(e.target); //This will give the actual element.
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     document.querySelector('#my-form').style.background = '#ccc';

    
// //first parameter will be event you want and 2nd will be the function you want to run when "event" happens.
// // "e" is the event parameter.

// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// }); 

btn.addEventListener('mouseout',(e) =>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';


});
