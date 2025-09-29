function playGame(choice) {

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';


    if (choice == computerChoice) {
        result = "Its a tie!"
        document.getElementById("result").innerHTML = result;
        document.getElementById("cp").innerHTML = computerChoice;

    }
    else {

        if (choice == "rock") {
            if (computerChoice == "paper") {
                result = "Computer Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            } else {
                result = "Player Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            }

        }
        else if (choice == "paper") {
            if (computerChoice == "rock") {
                result = "Player Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            } else {
                result = "Computer Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            }
        }
        else {
            if (computerChoice == "rock") {
                result = "Computer Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            } else {
                result = "Player Wins!"
                document.getElementById("result").innerHTML = result;
                document.getElementById("cp").innerHTML = computerChoice;
            }
        }
    }

}