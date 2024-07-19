const max = prompt("Enter Max your Number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess Number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("congratulation you guess right");
    break;
  } else if (guess < random) {
    guess = prompt("your guess was to small");
  } else {
    guess = prompt(" your guess was too large");
  }
}
