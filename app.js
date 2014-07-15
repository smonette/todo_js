var form = document.getElementById("createTasks");
var list = document.getElementById("list");

form.onsubmit = function(e) {
	e.preventDefault();

	var newItem = document.createElement('li');
	var newRemoveButton = document.createElement('a');
	newRemoveButton.className = "close";
  	var newTextNode = document.createTextNode(this.todo_item.value);
  	var newButtonText = document.createTextNode("x");

	list.appendChild(newItem);
	newItem.appendChild(newTextNode);
	newItem.appendChild(newRemoveButton);
	newRemoveButton.appendChild(newButtonText);


	newRemoveButton.onclick = function(){
		console.log("Inside the onclick")
		list.removeChild(newItem);
	};

};

var allItems = document.getElementsByTagName('li');
localStorage.setItem('allItems', allItems);

if (allItems.length > 0) {
	var retrievedObject = localStorage.getItem('allItems');
	list.innerHTML = (retrievedObject);
};




