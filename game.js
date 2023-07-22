let compcount=0;
let playercount=0;

const rock=document.getElementById("1");
const scissors=document.getElementById("2");
const paper=document.getElementById("3");
const winlosetext=document.querySelector(".winlosetext");
const playerScore=document.querySelector(".playerScore");
const compScore=document.querySelector(".compScore");

function getComputerChoice() {
    let ran = Math.floor(Math.random()*3);
    const choice = ["rock", "paper", "scissors"];

    return choice[ran];
}

function resetScores() {
    playercount=0;
    compcount=0;
    playerScore.textContent=playercount;
    compScore.textContent=compcount;
}

function win(play,comp) {
    playercount++;
    playerScore.textContent=playercount;
    winlosetext.textContent=`Yayy!! ${play} beats ${comp}`;
    if(playercount==5) {
        winlosetext.classList.add("modifiedwinlose");
        winlosetext.textContent="Less goo! You have won the match."
        resetScores();
    }
}

function loss(play,comp) {
    compcount++;
    compScore.textContent=compcount;
    winlosetext.textContent=`Ohh noo!! ${comp} beats ${play}`;
    if(compcount==5)
    {
        winlosetext.classList.add("modifiedwinlose");
        winlosetext.textContent="Oh oh! You have lost. Now go touch some grass."
        resetScores();
    }
}

function draw() {
    winlosetext.textContent=`It is a draw`;
}

function game(playerChoice) {
    winlosetext.classList.remove("modifiedwinlose");
    console.log(playerChoice);
    let compChoice=getComputerChoice();
    console.log(compChoice);

    if((playerChoice=="rock" && compChoice=="scissors") || (playerChoice=="paper" && compChoice=="rock") || (playerChoice=="scissors" && compChoice=="paper"))
        win(playerChoice,compChoice);
    else if(playerChoice===compChoice)
        draw();
    else 
        loss(playerChoice,compChoice);
}

function main() {
    let playerChoice;

    rock.addEventListener('click', () => game("rock"));
    scissors.addEventListener('click', () => game("scissors"));
    paper.addEventListener('click', () => game("paper"));

}

main();
