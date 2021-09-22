const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

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

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value; // this is a string of the new input
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);