$(document).ready(function(){

	var selected="";

	var selector = Math.floor((Math.random()*10)+1);
	console.log(selector);
	
	if (selector === 1){
		selected="Xander, don't speak Latin in front of the books.";
	}

	else if (selector === 2){
		selected="Please do not send so much glitter. It ruins the carpet.";
	}

	else if (selector === 3){
		selected="No good can come of any association with anything labelled Kathryn.";
	}

	else if (selector === 4){
		selected="Of course too much is bad for you.";
	}

	else if (selector === 5){
		selected="Please bear in mind throughout that it is meant to be funny.";
	}

	else if (selector === 6){
		selected="Tinker Tailor Sherlock Spy.";
	}

	else if (selector === 7){
		selected="Songs of love echo, I love mashed potato.";
	}

	else if (selector === 8){
		selected="Oh hello, 1997.";
	}

	else if (selector === 9){
		selected="What is it you do again?";
	}

	else {
		selected="Tea. Just a proper cup of tea.";
	}


console.log(selected);
$('#description').text(selected);
console.log(selector);


});