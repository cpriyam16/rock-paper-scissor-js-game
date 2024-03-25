// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Selecting DOM elements
const chanceBtn = document.querySelectorAll('.chance');
const msg = document.querySelector('.result');
const userScoreMsg = document.getElementById('userScore');
const computerScoreMsg = document.getElementById('computerScore');

// Adding event listener to each chance button
chanceBtn.forEach((chance) => {
    chance.addEventListener('click', (e) => {
        const userChanceId = chance.getAttribute('id');
        playGame(userChanceId);
    });
});

// Generate a random chance for the computer
const genCompChance = () => {
    const options = ['rock', 'paper', 'scissor'];
    let randomIdx = Math.floor(Math.random() * 3);
    return(options[randomIdx]);
}

// Function to handle a draw game
const drawGame = () => {
    showMessage();
    msg.classList.remove('pass', 'fail');
    msg.innerText = 'Its a draw';
}

// Function to display message
const showMessage = () => {
    msg.style.display = 'block';
}

// Function to play the game and determine the winner
const playGame = (userChanceId) => {
    const compChanceID = genCompChance();
    if(userChanceId === compChanceID) {
        drawGame();
    } else {
        let userWin = true;
        if(userChanceId === 'rock') {
            userWin = compChanceID === 'paper' ? false : true;
        } else if (userChanceId === 'paper') {
            userWin = compChanceID === 'rock' ? true : false;
        } else {
            userWin = compChanceID === 'paper' ? true : false;
        }
        showWinner(userWin, userChanceId, compChanceID);
    }
}

// Function to display the winner
const showWinner = (userWin, userChanceId, compChanceID) => {
    showMessage();
    if (userWin) {
        msg.classList.add('pass');
        msg.innerText = `You win, ${userChanceId} beats ${compChanceID}`;
        msg.classList.remove('fail');
        userScore++;
        userScoreMsg.innerText = userScore;
    } else {
        msg.classList.add('fail');
        msg.innerText = `You lose, ${compChanceID} beats ${userChanceId}`;
        msg.classList.remove('pass');
        compScore++;
        computerScoreMsg.innerText = compScore;
    } 
}