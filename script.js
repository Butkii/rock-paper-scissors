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

console.log('The computer played ' + computerPlay());


