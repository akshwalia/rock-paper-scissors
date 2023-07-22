function getComputerChoice() {
    let ran = Math.floor(Math.random()*3);
    let choice;
    if(ran==0)
        choice="rock";
    else if (ran==1)
        choice="paper";
    else
        choice="scissors";

    return choice;
}

function getPlayerChoice()
{
    let choice=prompt("Type your choice");
    choice=choice.toLowerCase();
    return choice;
}

function result(comp,play)
{
    if((play=="rock" && comp=="scissors") || (play=="paper" && comp=="rock") || (play=="scisscors" && comp=="paper"))
        return 1;
    else if (comp == play)
        return -1;
    else 
        return 0;
}

function game()
{
    let comp;
    let play;
    console.log(comp+" "+play);
    let res,playcount=0,compcount=0;

    while(playcount!==5 || compcount!==5) {
        comp=getComputerChoice();
        play=getPlayerChoice();
        res=result(comp,play);
        if(res==1){
            console.log("Yayy! "+play+" beats "+comp);
            playcount++;
        }
        else if(res==0){
            console.log("Ohh no, "+comp+" beats "+play);
            compcount++;
        }
        else
            console.log("It's a tie");
    }

    if(playcount==5)
        console.log("Yay, you have defeated the computer");
    else 
        console.log("Sorry, you have lost and you must die");
    
}

game();