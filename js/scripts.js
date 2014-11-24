// Random Number
var getRand = function() {
	var limit = 5;
	var numRand = Math.floor(Math.random()*limit);
	
	// console.log(getRand());
	return numRand;
};

// Background Classes
var bgColor = ['teal', 'gold', 'orange', 'violet', 'green']; 
$('body').addClass(bgColor[getRand()]);

