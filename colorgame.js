var colors = generateRandomColors(6);

var pickedColor = colors[Math.floor(Math.random()*colors.length)];
document.querySelector("#picked").textContent = pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var isGameHard = true;
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function(){
	
	easy();

	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	
});

hardButton.addEventListener("click", function(){
	
	hard();	
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	
	
	});



resetButton.addEventListener("click", function(){
	
	if (isGameHard === true){
		hard();
		
	}else {
		easy();
		

}


});

for(var i = 0; i < squares.length; i++){
	//kolory
	squares[i].style.backgroundColor = colors[i];

	
	//click listener
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Brawo!";
			changeColor(clickedColor);
			resetButton.textContent = "Play again?"
		}else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Sprobuj jeszce raz!";
			
		}
		
	});

}

// for(var j = 1; j < 10; i++){
// 			squares[i].style.opacity -= 0.1;
// 		}
// 		squares[i].style.opacity = 0;

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
	//kolory
	squares[i].style.backgroundColor = color;
	 document.querySelector("#h1").style.backgroundColor = color;
}
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function generateRandomColors(num){
	var arr = []

		for(var i = 0; i < num; i++){
			arr[i] = getRandomRgb();
		}

	return arr;
}

function easy(){
	

		colors = generateRandomColors(3);

		pickedColor = colors[Math.floor(Math.random()*colors.length)];
		document.querySelector("#picked").textContent = pickedColor;
		
		for(var i = 0; i < 3; i++){
		//kolory
		squares[i].style.backgroundColor = colors[i];
		}

		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		

		document.querySelector("#h1").style.backgroundColor = "steelblue";
    	
		for(var i = 3; i < 6; i++){
			squares[i].style.visibility = 'hidden';
		}
	

	isGameHard = false;
}

function hard(){
	

		colors = generateRandomColors(6);

		pickedColor = colors[Math.floor(Math.random()*colors.length)];
		document.querySelector("#picked").textContent = pickedColor;
		
		for(var i = 0; i < 6; i++){
		//kolory
			squares[i].style.backgroundColor = colors[i];
		}

		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";


		document.querySelector("#h1").style.backgroundColor = "steelblue";

		for(var i = 3; i < 6; i++){
			squares[i].style.visibility = 'visible';
		}
	

		isGameHard = true;
}