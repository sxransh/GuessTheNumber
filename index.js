let username;
let guess;
let answer;
answer=Math.floor(Math.random() * (100-50 + 1) + 50);


document.getElementById(`mySub`).onclick= function(){
    username=document.getElementById(`fam`).value;
    document.getElementById(`heading`).textContent = `Yoo whats up ${username}`;
    document.getElementById(`heading2`).textContent = `How are you doing ?`;
}



document.getElementById("enter").onclick = function() {
    guess = parseInt(document.getElementById("number").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < 50 || guess > 100) {
        message.textContent = "Please enter a valid number between 50 and 100.";
        return;
    }

    if (guess === answer) {
        message.textContent = `🎉 Correct! You guessed the number ${answer}.`;
    } else if (guess > answer) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = "Too low! Try again.";
    }
};