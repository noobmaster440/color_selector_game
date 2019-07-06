var numColors=6
var rgbcolor=[]
var pickedColor

var dispRes=document.querySelector("#displayResult")
var squares=document.querySelectorAll(".square")
var displayColor=document.querySelector("#displayColor")
var h1=document.querySelector("h1")
var button=document.querySelector("#result")
var stripe=document.querySelector("#stripe")
var mode=document.querySelectorAll(".mode")

init();
function init(){
	setModeButtons()
	setSquares()
	reset()
}

button.addEventListener("click",function(){
	reset();
})

function setModeButtons(){
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected")
			mode[1].classList.remove("selected")
			this.classList.add("selected")
			this.textContent==="Easy"?numColors=3:numColors=6;
			reset();
		})
	}
}

function setSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function () {
			//grab color of clickedSquare
			var chosenColor=this.style.backgroundColor
			//comparing color with PickedColor
			if(chosenColor===pickedColor){
			dispRes.textContent="CORRECT"
			changeColors(pickedColor)
			h1.style.backgroundColor=chosenColor
			button.textContent="PLAY AGAIN?"
			}else{
			dispRes.textContent="TRY AGAIN"
			this.style.backgroundColor="#000"
			}
		})
	}
}

function reset(){
	rgbcolor=generateRandomColor(numColors)
	pickedColor=pickColor(numColors)
	dispRes.textContent=""
	displayColor.textContent=pickedColor
	button.textContent="New Colors"
	for (var i = 0; i < squares.length; i++) {
	//assign again initial colors to squares
	if(rgbcolor[i]){
		squares[i].style.display="block"
		squares[i].style.backgroundColor=rgbcolor[i]
	}
	else
		squares[i].style.display="none"
	}
	h1.style.backgroundColor="steelBlue"
	stripe.style.backgroundColor="white"
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		//assigning each square the correct Color
		squares[i].style.backgroundColor=color
	}
} 

function pickColor(num){
	//picking random color outta array
	var color=rgbcolor[Math.floor(Math.random()*num)]
	return color
}

function generateRandomColor(num){
	var arr=[]
	for (var i = 0; i < num; i++) {
		//randomColor
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb(" + r +", "+ g +", "+ b +")";
}
