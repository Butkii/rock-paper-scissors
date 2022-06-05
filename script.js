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

function playerPlay() {
    const input = prompt('Select rock paper or scissors');
    return input;
}

console.log('The computer played ' + computerPlay());
console.log('The player played ' + playerPlay());
