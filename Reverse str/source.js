function reverseInput(){
	console.log('abc');
	var userInput = document.getElementById('input').value;
	var UserOutput = reverseString(userInput);	
	document.getElementById('output').innerHTML = UserOutput;
}

function reverseString(str) {
	console.log(str);
	return str.split("").reverse().join("");
}

console.log('def')