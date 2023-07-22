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

function result(comp,play)
{
    if((play=="rock" && comp=="scissors") || (play=="paper" && comp=="rock") || (play=="scisscors" && comp=="paper"))
        return 1;
    else if (comp == play)
        return -1;
    else 
        return 0;
}

function getPlayerChoice() {
    const playerSelection = document.querySelectorAll("img");
    let choice;
    playcount=0,compcount=0;
    playerSelection.forEach(select => {
        select.addEventListener('click', function(e) {
            if(e.target.id === "1")
                choice = "rock";
            else if(e.target.id === "2")
                choice = "scissors";
            else 
                choice = "paper";

            let comp;
            let play=choice;
            
            let res;
            
            comp=getComputerChoice();
            console.log(play,comp);
            res=result(comp,play);
            if(res==1){
                console.log("Yayy! "+play+" beats "+comp);
                playcount++;
                console.log(playcount);
            }
            else if(res==0){
                console.log("Ohh no, "+comp+" beats "+play);
                compcount++;
                console.log(compcount);
            }
            else
                console.log("It's a tie");
                  
        })
    });

    return choice;
}






getPlayerChoice();
