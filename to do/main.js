function addElement() { 
    var x = document.getElementById("addToDotext").value; //creates a new list item with the value of the input of the user
    var p = document.createElement("li");
    var n = document.createTextNode(x);
    p.appendChild(n);
    var element = document.getElementById("listToDo");
    element.appendChild(p);

    var button = document.createElement("button"); //create a button to each list item to be able to remove items
    var btntext = document.createTextNode("Remove");
    button.className = "remove";
    button.appendChild(btntext);
    p.appendChild(button);
    
    if (x == "") { //Alert if the input is empty then reloads the page.
        alert("Textfield cant be empty")
        document.location.reload()
    }
    
    for (i = 0; i < remove.length; i++) { //using a for loop to display = "none" when the user clicks the remove button
        remove[i].onclick = function() {
          var listItem = this.parentElement;
          listItem.style.display = "none";
        }
      }
}
var toDoList = document.getElementsByTagName("LI"); // for each list item in the list a button is generated to be able to remove list items
var i;
for (i = 0; i < toDoList.length; i++) {
  var button = document.createElement("button");
  var btntext = document.createTextNode("remove");
  button.className = "remove";
  button.appendChild(btntext);
  toDoList[i].appendChild(button);
}

var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {  // each button with the name remove shall be display= "none when clicked"
  remove[i].onclick = function() {
    var listItem = this.parentElement;
    listItem.style.display = "none";
  }
}