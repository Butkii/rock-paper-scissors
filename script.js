function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

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

function endgame() {
    document.getElementById('gameplay').style.setProperty('display', 'none');
    document.getElementById('results').style.setProperty('display', 'flex');
    document.getElementById('results').style.setProperty('flex-direction', 'column');
    document.getElementById('results').style.setProperty('align-ttems', 'center');
    document.getElementById('results').style.setProperty('justify-content', 'center');
    
    const endBtn = document.querySelector('.playAgain');
    endBtn.addEventListener('click', gameplay);
}

function gameplay() {
    document.getElementById('main').style.setProperty('display', 'none');
    document.getElementById('results').style.setProperty('display', 'none');
    document.getElementById('gameplay').style.setProperty('display', 'block');

    const options = document.querySelectorAll('.box');
    const desc = document.querySelector('.desc');
    const gamescore = document.querySelector('.gamescore');
    let pScore = 0;
    let cScore = 0;
    gamescore.innerHTML = pScore + '-' + cScore;
            
    options.forEach(option => option.addEventListener('click', function() {
        const playerSelection = option.id;
        const computerSelection = computerPlay(); 
        const result = gameRound(playerSelection, computerSelection);
        if(result == 1) {
            desc.innerHTML = 'You win!';
            pScore = pScore + 1;
            gamescore.innerHTML = pScore + '-' + cScore;
        }
        else if(result == -1) {
            desc.innerHTML = 'Computer wins!';
            cScore = cScore + 1;
            gamescore.innerHTML = pScore + '-' + cScore;
        }
        else if(result == 0) {
            desc.innerHTML = 'Draw.';
        }

        if (pScore == 5) {
            desc.innerHTML = 'Player wins the game!';
            document.getElementById('results').getElementsByClassName('desc')[0].innerHTML = 'Player wins the game!';
            endgame();
        }
        if (cScore == 5) {
            desc.innerHTML = 'Computer wins the game';
            document.getElementById('results').getElementsByClassName('desc')[0].innerHTML = 'Computer wins the game!';
            endgame();
        }
    }));
}


const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', gameplay);






