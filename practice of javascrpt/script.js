// var bulb  = document.querySelector("#bulb")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         flag = 1
//     }
//     else{
//         bulb.style.backgroundColor = "transparent"
//         flag = 0
//     }
// })

// converting temp

// document.getElementById("submitButton").onclick = function(){
//     let temp;

//     if(document.getElementById("cbutton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C";

//     }else if(document.getElementById("fbutton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°f";

//     }else{
//         document.getElementById("tempLabel").innerHTML = "select a unit";
//     }
// }

// function toCelsius(temp){
//     return (temp-32)*(5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9/5 + 32;
// }

// let prices = [5,10,15,30];

// for(let i of prices){
//     console.log(i);
// }

//sorting an array

// let fruits = ["apple","mango","orangr","kiwi","banana"]

// fruits = fruits.sort();
// for(let fruit of fruits){
//     console.log(fruit)
// }

// 2D array

// let fruits = ["apple","mango","orangr"];
// let vegitables = ["onion","Potatos","carrots"];
// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits,vegitables,meats];

// groceryList[2][1] = "lamb";
// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }

//spread operator

// let class1 = ["sachin","rohit","shivam"];
// let class2 = ["anu","sanjana","harshit"];

// class1.push(...class2)
// console.log(class1)

//callback function

// function greet(name, callback){
//     console.log("hi"+ " " + name);
//     callback();
// }

// function callMe()
// {
//     console.log("i am callback function");
// }
// greet("sachin",callMe);

//ForEach function
// let total = 0;
// let cart = [1,2,3,5,6,7,8];

// function checkout(element){
//     total += element;
// }

// cart.forEach(checkout);

// console.log("your total is $",+total);

//map function in array
// let numbers = [1,2,3,4,5,6,7];
// let squares = numbers.map(square);

// squares.forEach(print);

// function square(element){
//     return Math.pow(element,2);
// }

// function print(element){
//     console.log(element);
// }

// filter method

// let ages = [12,45,13,15,19,21,29,28,25,32,35];
// let adutls = ages.filter(checkAge);

// adutls.forEach(print)

// function checkAge(element){
//     return element >= 16;
// }

// function print(element){
//     console.log(element);
// }

// let grades =  [100,50,70,60,80,90];
// let grade = grades.sort(descendingSort)

// grade.forEach(print)
// function descendingSort(x,y){
//     return x-y;
// }
// function print(element){
//     console.log(element);
// }

// let count = 0;

// document.getElementById("incresseButton").onclick = function(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decreaseButton").onclick = function(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// shuffle(card);

// card.forEach(card => console.log(card));

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }


// const store = new Map([
//     ["t-shirt",20],
//     ["jeans",40],
//     ["underwear",50],
//     ["socks",60],
//     ["shoes",70],
// ]);

// let shoppingcart = 0;
// shoppingcart += store.get("t-shirt");
// shoppingcart += store.get("underwear");
// shoppingcart += store.get("jeans");

// console.log(`$${shoppingcart}`);
// store.set("hat",60);
// store.delete("hat")


// store.forEach((value, key) => console.log(`${key} $${value}`));



// const car = {
//     model: "tesla",
//     year: 2023,
//     color: "red",

//     drive: function(){
//         console.log("you are driving the tesla model S");
//     },
//     brake: function(){
//         console.log("you are stoped");
//     }
// }
// console.log(car.model);
// console.log(car.year);
// console.log(car.color);

// car.drive();
// car.brake();

// const car1 = {
//     model: "Tesla",
//     year: 2023,
//     color:"red",

//     drive:function(){
//         console.log(`you are driving ${this.model}`)
//     }

// }
// const car2 = {
//     model: "Audi",
//     year: 2021,
//     color:"Mat Black",

//     drive:function(){
//         console.log(`you are driving ${this.model}`)
//     }

// }
// car1.drive();
// car2.drive();


// class Player{

//     score = 0;
//     pause(){
//         console.log("you are paused the game");
//     }
//     exit(){
//         console.log("you are trying to exit from the game");
//     }
// }
// const Player1 = new Player();
// const Player2 = new Player();
// const Player3 = new Player();

// Player1.score +=1;
// Player2.score +=4;
// Player3.score +=6;

// console.log(Player1.score);
// Player1.pause();
// Player1.exit();
// console.log(Player2.score);
// Player1.pause();
// Player1.exit();
// console.log(Player3.score);
// Player1.pause();
// Player1.exit();


// class student {
//     constructor(name,age, cgpa){
//         this.name = name;
//         this.age = age;
//         this.cgpa = cgpa
//     }
//     study(){
//         console.log(`${this.name} is studing.`);
//         console.log(`he is ${this.age} years old.`);
//         console.log(`you gpa is in this semester is ${
//             this.cgpa}`);
//     }
// }

// const student1 = new student("Sachin Chauhan",30,82.60);

// student1.study();
  

// class car{
//     static numberOfcars = 0;
//     static carNames = [];


//     constructor(model){
//         this.model = model;
//         car.carNames.push(model)
//         car.numberOfcars +=1;
//     }
// }

// const car1 = new car("BMW");
// const car2 = new car("Ferrari");
// const car3 = new car("Audi");
// const car4 = new car("Mercedece");
// const car5 = new car("Tata");
// const car6 = new car("Mahindra");
// const car7 = new car("Maruti Suzuki");
// const car8 = new car("Buaggti");


// console.log("Number of cars:", car.numberOfCars);
// console.log("Car names:", car.carNames);
// console.log(car.numberOfcars);


// class Animals{
//     alive = true;
//     Eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     Sleep(){
//         console.log(`this ${this.name} is slepping`);
//     }
// }
// class Rabbit extends Animals{
//     name = "rabbit"
//     run(){
//         console.log(`this ${this.name} is running`);
//     }
// }
// class Fish extends Animals{
//     name = "fish"
//     swim(){
//         console.log(`this ${this.name} is swimming`);
//     }
// }
// class Parret extends Animals{
//     name = "parret"
//     fly(){
//         console.log(`this ${this.name} is flyining`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const parret = new Parret();

// console.log(rabbit.alive);
// rabbit.Eat();
// rabbit.Sleep ();

// class Animals{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animals{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animals{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1,40);
// const fish = new Fish("fish",2,30);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);


// class Car{
//     constructor(power){
//         this._gas = 50;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}L (${this._gas/50 *100}%)`;
//     }
// }
// let car = new Car(500);

// console.log(car.power);
// console.log(car.gas);


// class Car{
//     constructor(model,year,color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }
// const car1 = new Car("mustang",2021,"red");
// const car2 = new Car("Tesla",2019,"mat black");
// const car3 = new Car("Audi",2017,"black");

// function displayInfo(Car){
//     console.log(Car.model);
//     console.log(Car.year);
//     console.log(Car.color);
// }
// displayInfo(car3);


// class Card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }
// let cards = [new Card("A","Diamonds"),
//              new Card("A","Clubs"),
//              new Card("A","Spades"),
//              new Card("A","Hearts")]

// console.log(cards[0].value +" of "+ cards[0].suit);
// cards.forEach(Card => console.log(`${Card.value} ${Card.suit}`));


// try{
//     let x = window.prompt("enter a number");
//     x= Number(x);

//     if((isNaN(x))) throw"that wasn't a number";
//     if(x =="") throw "that was empty";

//     console.log(`${x} is a number`);
// }
// catch(error){
//     console.log(error);
// }


// let count = 0;
// let max = window.prompt("counf the number up to ");
// max = Number(max);

// const myTimer = setInterval(countUp,2000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count>= max){
//         clearInterval(myTimer);
//     }
// }


// const wait = (time) => new Promise(resolve =>{
//     setTimeout(resolve,time);
// });

// wait(3000).then(()=> console.log("thanks for waiting"));


// const promise = new Promise((resolve, reject) =>{
//     let fileLoaded  = true;
//     if(fileLoaded){
//         resolve("file loaded")
//     }else{
//         reject("file Not loaded")
//     }
// });
// promise.then(value => console.log(value))
//        .catch(error =>console.log(error));
       

// const nametag = document.createElement("h1")
// nametag.textContent = window.prompt("enter your text");
// document.body.append(nametag)

// const Mylist = document.querySelector("#Fruits");
//  const listItem = document.createElement("li")
//  listItem.textContent = "PineApple";
// //  Mylist.prepend(listItem);
// Mylist.insertBefore(listItem,Mylist.getElementsByTagName("li")[2])

// const element = document.getElementById("mybutton");
// element.onclick = doSomething;

// function doSomething(){
//     alert("you are click on the button")
// }

const element = document.getElementById("myDiv");

function doSomething(){
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    element.style.backgroundColor = "lightblue";
}

element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;


