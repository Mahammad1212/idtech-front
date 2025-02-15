let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessedNumbers = [];

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Zəhmət olmasa 1-100 arası bir ədəd daxil edin.";
        return;
    }

    guessCount++;
    guessedNumbers.push(userGuess);
    document.getElementById("guessCount").textContent = guessCount;
    document.getElementById("guessedNumbers").textContent = guessedNumbers.join(", ");

    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = `Təbriklər! Düz tapdın!  Ədəd: ${randomNumber}`;
    } else if (userGuess > randomNumber) {
        document.getElementById("message").textContent = "Daha kiçik bir ədəd sınayın!";
    } else {
        document.getElementById("message").textContent = "Daha böyük bir ədəd sınayın!";
    }
}
