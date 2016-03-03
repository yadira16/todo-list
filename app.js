var itemList = [];

function addToItem() {
	//Grabs what user types in input field and stores inside variable
	var addItem = document.getElementById('addItem').value;
	//reusing whatever the user types in and it's reusing inside of empty array
	itemList.push(addItem);
	
	//this loops through our array and stores what the user inputs into variable new item
	for (var i = 0; i < itemList.length; i++) {
		var newItem = itemList[i] + " <a href='#' onClick='removeItem(" + i + ");'>X</a>" + " <br>";
	};
	// for (var i = 0; i<myList.length; i++) {
	// 	var newItem = ""
	// }
	//this grabs our empty div and it's writing inside of it what the user inputs
	document.getElementById('items').innerHTML += newItem;
}

function removeItem(i) {
		itemList.splice(i, 1) 
		var  newItem = "";

		for(var i = 0; i < itemList.length; i++) {
			newItem += itemList[i] + " <a href='#' onClick='removeItem(" + i + ");'>X</a>" + " <br>";
		}
		document.getElementById('items').innerHTML = newItem;	
}