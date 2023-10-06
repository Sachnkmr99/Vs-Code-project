// const element = document.getElementById("myDiv");

// function doSomething(){
//     element.style.backgroundColor = "red";
// }
// function doSomethingElse(){
//     element.style.backgroundColor = "lightblue";
// }

// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

// const outerDiv = document.getElementById("outerDiv");
// const innerDiv = document.getElementById("innerDiv");

// outerDiv.addEventListener("click",dosomething);
// innerDiv.addEventListener("click",dosomething);


// function dosomething(){
//     this.style.backgroundColor = "red";
//     alert(`rigth now you are selected${this.id}`);
// }

// const MyButton = document.getElementById("myButton");
// const MyImg = document.getElementById("myImg");

// MyButton.addEventListener("click", () =>{

//     if(MyImg.style.display == "none"){
//         MyImg.style.display = "block";
//     }
//     else{
//         MyImg.style.display = "none";

//     }
// })

// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){

//     switch(event.key){
//         case "ArrowDown":
//             y+=10;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=10;
//             myDiv.style.top = y + "px";
//             break; 
//         case "ArrowRight":
//             x+=10;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x-=10;
//             myDiv.style.left = x + "px";
//             break;         
//         default:
//             break;
//      }
// }

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500,0);
// context.lineTo(250, 250);
// context.stroke();
// context.strokeStyle = "purple";
// context.lineWidth = 10;

// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// console.log(navigator.cookieEnabled);
document.cookie = "Firstname = Sachin; expires = Sun,1 June,2030 12:00:00 UTC; path=/";
console.log(document.cookie);






