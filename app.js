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

}


var close = document.getElementsByClassName('close');

for (var i=0; i < close.length; i++) {
	console.log("Inside the for loop" + i);
	close[i].onclick = function(){
		console.log("Inside the onclick")
		this.parentNode.removeChild();
	}
}


