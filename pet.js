// Make a variable called whichPet.

var whichPet = prompt('What kind of pet do you have?', '');
// whichPet was "Dog"
whichPet = whichPet.toLowerCase()
// whichPet will be "dog"



// Write some code that responds differently based on which pet
// you have. 
if(whichPet == 'dog') {
	alert('Dogs are the best!!!');
}

// If you have a dog, it should say, "Dogs are the best!" 
else if(whichPet == 'cat') {
	alert('Dogs are better than cats!');
}
// If you have a cat, it should say, "Dogs are better than cats!"


// If you have a hamster, it should say "Hamsters are tiny!" 

else if(whichPet == 'hamster') {
	alert('Hamsters are tiny!');
}
// And for all other pets, it should say, "You should get a dog!"
else {
	alert('You should get a dog!');
}