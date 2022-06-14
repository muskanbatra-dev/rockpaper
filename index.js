 function computerPlay (){
    let compChoice = ["rock", "paper","scissors"]
    let randomChoice = (Math.floor(Math.random()*3)+1)

    if (randomChoice === 1){
    return "rock";
}
if (randomChoice === 2){
    return "paper";
}
if (randomChoice === 3){
    return "scissors";
}
 }

console.log(computerPlay())