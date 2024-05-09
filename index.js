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

function decideWinner (choice1, choice2) {
    switch (choice1) {
        case "rock":
            return choice2 === "paper" ? true : false
        case "paper":
            return choice2 === "scissors" ? true : false
        case "scissors":
            return choice2 === "rock" ? true : false
    }
}

function play() {
    const player2choice = getPlayer2Choice()
    const player1choice = getPlayer1Choice()

    console.log("Computer", player1choice)
    console.log("You", player2choice)

    const player2wins = (player1choice, player2choice)

    if(player2wins) {
        console.log("Computer wins")
    } else {
        console.log("You win")
    }
}

play()