const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");
// const loginButton = document. querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  event.preventDefault();
  // console.log(event);
  // console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username); // now we have a small database for usernames
  paintGreetings(username);
}


function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
// if and only if you "submit" the browser will automatically play the function

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){ // for first time submission
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{ // if there already is a saved input value
  paintGreetings(savedUsername);
}



