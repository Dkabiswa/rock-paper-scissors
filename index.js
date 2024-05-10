function getPlayer1Choice() {
    const options = ["rock", "paper", "scissors"]
    const randomValue = Math.floor(Math.random() * 3)
    return options[randomValue]
}

function getPlayer2Choice() {
    const sign = window.prompt("Enter your choice");
    return sign
}

function rounds() {
    
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

function playRound() {
    const player2choice = getPlayer2Choice()
    const player1choice = getPlayer1Choice()

    console.log("Computer", player1choice)
    console.log("You", player2choice)

    const choice1Result = decideChoice1Result(player1choice, player2choice)

    switch (choice1Result) {
        case "win":
            console.log("Computer wins")
            break;
        case "lose":
            console.log("You wins")
            break;
        case "repeat":
            console.log("Repeat")
            playRound()
            break;
        default:
            break;
    }
}

playRound()