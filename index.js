let player1Wins = 0
let player2Wins = 0
let round = 0

const startGame = document.querySelector("#startGame");
const player2Selection = document.querySelector("#player2Selection");
const player1Selection = document.querySelector("#player1Selection");

const optionsContainer = document.querySelector(".player-2-options")
const resultsContainer = document.querySelector("#round-results");

const optionsButtons = document.querySelectorAll(".player-2-options button");

const player2Count= document.querySelector("#player2Count");
const player1Count = document.querySelector("#player1Count");


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

function playRound(player2choice) {
    const player1choice = getPlayer1Choice()

    const { iconHTML, text } = displaySelected(player1choice);
    player1Selection.innerHTML = `${iconHTML} ${text}`;
    console.log(player1choice, player2choice);

    const choice1Result = decideChoice1Result(player1choice, player2choice)

    switch (choice1Result) {
        case "win":
            player1Wins += 1
            // console.log(`Computer wins round ${round}`);
            break;
        case "lose":
            player2Wins += 1
            // console.log(`You win round ${round}`);
            break;
        case "repeat":
            // console.log("Its a tie, repeat");
            // playRound(round)
            break;
        default:
            break;
    }
    console.log(choice1Result);
    console.log(player2Wins);

    if (player1Wins > player2Wins) {
        updatePlayerClasses(player1Count, player2Count);
    } else if (player1Wins < player2Wins) {
        updatePlayerClasses(player2Count, player1Count);
    } else {
        clearClasses(player1Count)
        clearClasses(player2Count)
    }
    
    player2Count.innerHTML = player2Wins;
    player1Count.innerHTML = player1Wins;
}


// function playGame(n=5) {
//     let counter = 0
//     while(counter < n) {
//         playRound(counter+1)
//         counter++
//     }
//     const winnerText = player1Wins > player2Wins ? "Computer Wins" : "You win"
//     console.log(winnerText);
// }

// playGame()

optionsButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Hide/show containers
        optionsContainer.classList.toggle("hide");
        resultsContainer.classList.toggle("hide");

        // Get button's data
        const selection = button.dataset.selection;
        const { iconHTML, text } = displaySelected(selection);

        // Update player 2 selection
        player2Selection.innerHTML = `${iconHTML} ${text}`;

        playRound(selection) 
    });
});

startGame.addEventListener("click", (e) => {
    e.target.classList.toggle("hide")
    optionsContainer.classList.toggle("hide")
});

function displaySelected(choice) {
    switch (choice) {
        case "rock":
            return {
                iconHTML: '<p><i class="fas fa-hand-back-fist fa-2x"></i></p>',
                text: 'Rock'
            }
        case "paper":
            return {
                iconHTML: '<p><i class="fas fa-hand fa-2x"></i></p>',
                text: 'Paper'
            }
        case "scissors":
            return {
                iconHTML: '<p><i class="fas fa-hand-scissors fa-2x"></i></p>',
                text: 'Scissors'
            }
        default:
            break;
    }
}

function updatePlayerClasses(winnerCount, loserCount) {
    winnerCount.classList.add("color-green");
    winnerCount.classList.remove("color-red");
    loserCount.classList.remove("color-green");
    loserCount.classList.add("color-red");
}

function clearClasses(element) {
    element.classList.remove("color-green");
    element.classList.remove("color-red");
}



