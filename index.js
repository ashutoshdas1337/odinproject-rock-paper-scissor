console.log("hello javascript")
let computerScore=0;
let userScore=0;
let round=1;
function getUserChoice(){
    let input=prompt("enter your choice :- 1) rock, 2)paper 3) scissor")
    alert("user chose:"+input);
    return input;
}
function getComputerChoice(){
    let a=Math.floor(Math.random()*3);
    if(a===0){
        alert("computer chose rock")
        return 'rock';
    }
    if(a===1){
        alert("computer chose paper")
        return 'paper';
    }
    if(a===2) {
        alert("computer chose scissor")
        return 'scissor';
    }
}
for(let i=1;i<=5;i++){
let userChoice=getUserChoice();
let computerChoice=getComputerChoice()

    if((userChoice==='rock'&&computerChoice==='rock')||(userChoice==='paper'&&computerChoice==='paper')||(userChoice==='scissor'&&computerChoice==='scissor')){
    alert("its a draw");

}
else if(userChoice==='scissor'&&computerChoice==='paper'){
    
    userScore=userScore+1;
    alert("user won the round. User Score:"+userScore+",Computer Score:"+computerScore)
}
else if(userChoice==='rock'&&computerChoice==='scissor'){
    userScore+=1;
    alert("user won the round. User Score:"+userScore+",Computer Score:"+computerScore)
}
else if(userChoice==='paper'&&computerChoice==='rock'){
    userScore+=1;
    alert("user won the round. User Score:"+userScore+",Computer Score:"+computerScore)
}
else{
    computerScore+=1;
    alert("computer won the round. User Score:"+userScore+",Computer Score:"+computerScore)
}
}

if(userScore>computerScore){
    alert("User won");
}
else if(userScore<computerScore){
    alert("Computer won");
}
else{
alert("its a tie");
}