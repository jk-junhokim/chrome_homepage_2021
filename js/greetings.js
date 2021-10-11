const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //use capitals for constants
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); //stops from refreshing the page
  loginForm.classList.add(HIDDEN_CLASSNAME); //just a game of adding & removing class names
  const username = loginInput.value;
  localStorage.setItem("username", username);
  /*
  greeting.innerText = `Good Day Master ${username}`; //same code below
  //greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  */
  paintGreetings(username);
}

/*code executes iff EVENT is executed*/
loginForm.addEventListener("submit", onLoginSubmit);
// js calls onLoginSubmit function with the default argument "event"
// "event" contains information about what happened during "submit"

function paintGreetings(username){
  greeting.innerText = `Good Day Master ${username}`; //we are remembering the user
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //gets username from local Storage

/*this code executes no matter what as web reads from top to bottom*/
if(savedUsername === null){ //if there exists a saved username this won't execute
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}

/* visualizing preventDefault
const link = document.querySelector("a");

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);
*/


