let text = "You don't listen well!";
function myFunction() {
  let button = document.getElementsByClassName("button")[0];
  if (button.innerHTML === text) {
    button.innerHTML = "Look at you!";
  } else {
    button.innerHTML = text;
  }
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let numbers = [10, 20, 30, 40, 50];
let target = 30;
let result = linearSearch(numbers, target);
if (result !== -1) {
  console.log(`found at index ${result}`);
} else {
  console.log("not found");
}
