//randomly chooses rock, paper or scissors
function computerPlay() {
    let options = [
        'rock',
        'paper',
        'scissors'
    ];
    let randomNumber = Math.floor(Math.random()*options.length);

    return options[randomNumber];
}

//prompt user to choose rock, paper or scissors
function playerPlay() {
    const input = prompt('Select rock paper or scissors');
    return input;
}

//compare the parameters to decide winner
function gameRound(playerSelection, computerSelection) {
    let points = 0;
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' ||
    playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock' ||
    playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        points = 1;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock' ||
    playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper' ||
    playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        points = 0;
    }
    else
        points = -1;

    return points;
}

//play the game for 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i+1));
        const playerSelection = playerPlay();
        const computerSelection = computerPlay(); 
        console.log('You played ' + playerSelection);
        console.log('Computer played ' + computerSelection);
        const result = gameRound(playerSelection, computerSelection);
        if(result == 1) {
            console.log('Player wins!');
        }
        else if(result == -1) {
            console.log('Computer wins!');
        }
        else if(result == 0) {
            console.log('Draw.');
        }
    }
}

game();
