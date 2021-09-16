//guessing game
//guess a number from 1 to 5
//generate a random number between 1 to 5
setTimeout(() => {
    document.querySelector(".into").innerHTML = "Now you can see";
}, 1000);

const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
let winNum = 0;
let loseNum = 0;




for(let i = 1; i<=5; i++ ){
    let guessNum = parseInt(prompt("Enter a number 1 to 5 :"));
    let randomNum = Math.floor(Math.random()*5) + 1 ;
    if (guessNum === randomNum) {
        winNum++
    } else {
        loseNum++
    }
}

win.innerHTML = winNum;
lose.innerHTML = loseNum;