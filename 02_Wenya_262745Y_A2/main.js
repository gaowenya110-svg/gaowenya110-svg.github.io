
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const page4=document.querySelector("#page4");

function hideall(){ 
page1.style.display="none";
page2.style.display="none";
page3.style.display="none";
page4.style.display="none";
}

page1btn.addEventListener("click", function () {
hideall(); 
page1.style.display="block";
});
page2btn.addEventListener("click", function () {
hideall(); 
page2.style.display="block";
});
page3btn.addEventListener("click", function () {
hideall(); 
page3.style.display="block";
});
page4btn.addEventListener("click", function () {
hideall(); 
page4.style.display="block";
});
hideall(); 


const hamBtn=document.querySelector("#hamIcon");

hamBtn.addEventListener("click",toggleMenus);

const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){

if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; 
menuItemsList.classList.remove("menuShow");
}else{ 
hamBtn.innerHTML="Open Menu"; 
menuItemsList.classList.add("menuShow");
}}


//quiz
const quizbtn=document.querySelector("#quizbtn");
const quizBox=document.querySelector(".quiz");
quizbtn.addEventListener("click",function(){
  if(quizBox.style.display==="block"){
    quizBox.style.display="none";
    quizbtn.innerHTML="Tap here to try a quiz!";
  }else{
    quizBox.style.display="block";
    quizbtn.innerHTML="Hide quiz";
  }
});

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="Ocean")score++;
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="50to80")score++;
//read the value of the selected radio button for q3
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); //check q3 value retrieved
if(q3=="Money")score++;
//read the value of the selected radio button for q4
q4=document.querySelector("input[name='q4']:checked").value;
console.log(q3); //check q4 value retrieved
if(q4=="No")score++;
scorebox.innerHTML="Score:"+score;
}

//game

const turtleId = document.getElementById("turtleId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function Moveturtle() {
	console.log ("hello");
turtleId.style.left = GetRandom(0, 500) + "px";
turtleId.style.top = GetRandom(0, 500) + "px";
}
var MoveturtleItvId = setInterval(Moveturtle, 1000);


const scoreBox=document.getElementById("scoreBox");

const popAudio = new Audio("bubblesound.mp3");

var score=0; //to track how many clicks
function turtleCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
popAudio.play(); //play the audio

}
//link durian to mouseclick to turtleCatch function
turtleId.addEventListener("click",turtleCatch);


document.addEventListener("keydown",function(evt){
console.log(evt);
if(evt.code=="KeyT"){
turtleId.classList.add("shrink");
}
if(evt.code=="KeyU"){
turtleId.classList.remove("shrink");
}


});

