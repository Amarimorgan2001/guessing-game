// alert("hello world");
// const friendName ="Melina";
// const instructorName ="Stewie"
// const programName ="tech360"
// let isCoding =true;
// let numPizzaSlicesAte = "3";
// let numPizzaSlicesFriendAte ="5";
// alert(friendName + "is coding");

// function agecal(birthyear,currentyear){
// let age = currentyear- birthyear;
// console.log(age);
    
// }
// agecal(2001,2019)
 
 function weather(degrees,type){
     if(type ==="celsius"){
         return((degrees * 9)/15) + 32;
     }
     else if(type ==="fahrenheit"){
     return((degrees - 32)* 5)/9;
     }
 }
let answer = weather(10,"celsius");
console.log(answer);

function weather(degrees,type){
    if(type==="fahrenheit"){
        return((degrees -9)/10) + 32;
    }
let answer = weather(20,"fahrenheit");
console.log(answer);

let targetNum;

targetNum= Math.floor((math.random()* 100)+ 1);
console.log(targetNum);
let resultDisplay=document.getElementById('result')

function checkResult(){
    let guess=parseInt(document.getElementById('number').value);
    console.log(guess,targetNum);
    if(guess == null){
        return;
    }
else if(guess==targetNum){
    resultDisplay.style.color = "#4BB543";
    resultDisplay.innerHTML = "You got it!";
    }
    else if(guess>targetNum){
    resultDisplay.style.color = "#d9534f";
    resultDisplay.innerHTML = "Too High";
    }
    else{
    resultDisplay.style.color = "#d9534f";
    resultDisplay.innerHTML = "Too Low";
    }
}
