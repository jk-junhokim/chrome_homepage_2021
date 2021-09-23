const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){ //this is putting the toDos array in the local storage
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "👌";
  li.appendChild(span); // now li has a child span
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

/*
start code review from here!!!
this is where code execution starts!!!
*/
function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value; // this is a string of the new input
  toDoInput.value = "";
  toDos.push(newToDo); //save the input to dos onto the array
  paintToDo(newToDo); //call function to update/delete new to dos
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){

}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  // parse function makes a string into array that we can actually use
  // arrays are smarter because it allows us to use each item in the array
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}