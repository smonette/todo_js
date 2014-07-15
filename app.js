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

	document.getElementById('item').value='';

	newRemoveButton.onclick = function(){
		list.removeChild(newItem);
	};

};

var allItems = document.getElementsByTagName('li');

for (i = 0; i < allItems.length; i++) {
	localStorage.setItem('item' + i, allItems);
}

console.log(localStorage.item1)
