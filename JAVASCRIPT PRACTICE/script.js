// let istatus  = document.querySelector("h5");
// let btn = document.querySelector("#add");

// let flag = 0

// btn.addEventListener("click",function(){

//     if(flag == 0){
//         istatus.innerHTML = "friend";
//         istatus.style.color = "green";
//         btn.innerHTML = "remove Friend";
//         flag = 1;
//     }else{
//         istatus.innerHTML = "Stanger";
//         istatus.style.color = "red";
//         flag = 0;
//         btn.innerHTML = "add Friend";
//     }
// })


// let con = document.querySelector("#container");

// let heart = document.querySelector("i");

// con.addEventListener("dblclick",function(){
//     heart.style.transform = 'translate(-50%,-50%) scale(1)';
//     setTimeout(function(){
//         heart.style.transform = 'translate(-50%,-50%) scale(0)';
//     },3000)
// })
let obj1 = {
    name: "Sachin",
    age:21,
    fathersNname: "Rajveer singh",
    companyName: "Duosoft IT solution pvt ltd"
}

console.log({...obj1});
