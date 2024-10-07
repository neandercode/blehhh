let text = "You don't listen well!";
function myFunction() {
  let button = document.getElementsByClassName("button")[0];
  if (button.innerHTML === text) {
    button.innerHTML = "Look at you!";
  } else {
    button.innerHTML = text;
  }
}
