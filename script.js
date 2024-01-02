let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText = `You lose. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
};

const playgame = (userchoice) =>{

    const compchoice = genComputerchoice();

    if(userchoice === compchoice)
    {
        drawgame();
    }else{
        let userWin = true;
        if(userchoice ===  "rock"){
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        } else{
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};

const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

choices.forEach((val) =>{
    val.addEventListener("click",()=>{
        const userchoice = val.getAttribute("id");
        playgame(userchoice);
    });

});