let number = Math.floor(Math.random()*100)+1;//math.ramdom()*100 gives random value between 0 to 100
let i=0;
while(i<10){
    let n = prompt("Guess the number between 1-100:");
    if(n>number){
        alert("Greater than the original number");
    }
    else if(n<number){
        alert("Lesser than the original number");
    }
    else{
        let score = 100-i;
        alert("Congrats!!! you have guessed the right number and the score is: "+score);
        break;
    }
    i++;
}
