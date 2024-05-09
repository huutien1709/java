function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var resultMessage = "";

    if (userChoice === computerChoice) {
        resultMessage = "Hòa!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        resultMessage = "Bạn thắng!";
    } else {
        resultMessage = "Bạn thua!";
    }

    document.getElementById("result").textContent = "Người chơi: " + userChoice + " | Máy tính: " + computerChoice + " | Kết quả: " + resultMessage;
}
