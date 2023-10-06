
// document.getElementById("submitButton").onclick = function(){
//     const Mybutton = document.getElementById("Mycheckbox");
//     const visabtn = document.getElementById("visabtn");
//     const rupaybtn = document.getElementById("rupaybtn");
//     const paypalbtn = document.getElementById("paypalbtn");

//     if(Mybutton.checked){
//         console.log("You are Subscribed")
//     }
//     else{
//         console.log("You are not Subscribed")
//     }

//     if(visabtn.checked){
//         console.log("You are paying with Visa card")
//     }
//     else if(rupaybtn.checked){
//         console.log("You are paying with rupay card")
//     }
//     else if(paypalbtn.checked){
//         console.log("You are paying with paypal")
//     }
//     else{
//         console.log("You must select one option of payment")
//     }
// }


let grade = 99;

switch(true){
    case grade>=90:
        console.log("you are did great");
        break;
    case grade>=80:
        console.log("You did good");
        break;
     case grade>=70:
        console.log("you are okay");
        break;
    case grade>=60:
        console.log("You did passes");
        break;

    case grade>=50:
        console.log("You fail");
        break;
    default:
        console.log("You are not entre any letter grade");   


}
