let player1Wins = 0
let player2Wins = 0

function getPlayer1Choice() {
    const options = ["rock", "paper", "scissors"]
    const randomValue = Math.floor(Math.random() * 3)
    return options[randomValue]
}

function getPlayer2Choice() {
    const sign = window.prompt("Enter your choice: rock, paper scissors");
    const input = sign.trim().toLowerCase()
    const isValid = validateInput(input)
    if(!isValid) {
        return getPlayer2Choice()
    }
    return input
}

function validateInput(input) {
    const options = ["rock", "paper", "scissors"]
    return options.includes(input)
}

function decideChoice1Result (choice1, choice2) {
    const rules = {
        rock: {
            rock: "repeat",
            paper: "lose",
            scissors: "win"
        },
        paper: {
            rock: "win",
            paper: "repeat",
            scissors: "lose"
        },
        scissors: {
            rock: "lose",
            paper: "win",
            scissors: "repeat"
        }
    }
    return rules[choice1][choice2]
}

function playRound(round) {
    const player2choice = getPlayer2Choice()
    const player1choice = getPlayer1Choice()

    console.log("Computer", player1choice)
    console.log("You", player2choice)

    const choice1Result = decideChoice1Result(player1choice, player2choice)

    switch (choice1Result) {
        case "win":
            player1Wins += 1
            console.log(`Computer wins round ${round}`);
            break;
        case "lose":
            player2Wins += 1
            console.log(`You win round ${round}`);
            break;
        case "repeat":
            console.log("Its a tie, repeat");
            playRound(round)
            break;
        default:
            break;
    }
}


function playGame(n=5) {
    let counter = 0
    while(counter < n) {
        playRound(counter+1)
        counter++
    }
    const winnerText = player1Wins > player2Wins ? "Computer Wins" : "You win"
    console.log(winnerText);
}

// playGame()