let guessNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let userNumber = Number(
  prompt("Enter the number you guess \n Hint: between 1 and 100")
);

while (guessNumber !== userNumber) {
  count++;
  if (userNumber > guessNumber) {
    console.log("Too high! Try again.");
    alert("Too high! Try again.");
  } else {
    console.log("Too low! Try again.");
    alert("Too low! Try again.");
  }
  userNumber = Number(prompt("Enter again:"));
}

count++;
console.log("Congrats 🎉 You guessed the number in " + count + " tries!");
alert("Congrats 🎉 You guessed the number in " + count + " tries!");
