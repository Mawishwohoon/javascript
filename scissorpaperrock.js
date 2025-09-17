let obj={
    1: "s",
    2: "p",
    3: "r"
}
while(true){
    alert("Welcome to Scissor, Paper, Rock game(Best of three)!");
    let score = 0;
    let n=1;
while(n<=3){
    let number = Math.floor(Math.random()*3)+1;
    let input = prompt("Round:"+n+"\n Enter s, p or r:");
    if(input.toLowerCase()=="s" && obj[number]=="p"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou win!");
        score++;
    }
    else if(input.toLowerCase()=="p" && obj[number]=="r"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou win!");
        score++;
    }
    else if(input.toLowerCase()=="r" && obj[number]=="s"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou win!");
        score++;
    }
    else if(input.toLowerCase()=="s" && obj[number]=="r"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou lost!");
        // score++;
    }
    else if(input.toLowerCase()=="p" && obj[number]=="s"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou lost!");
        // score++;
    }
    else if(input.toLowerCase()=="r" && obj[number]=="p"){
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nYou lost!");
        // score++;
    }
    else{
        alert("You: "+input+"\nComputer: "+ obj[number]+"\nTied!");
        // score++;
    }
    n++;
}
alert("Score: " + score +`${(score>=2)?" You win!":" Computer Wins!"}`);
let cont = confirm("Do you want to play another game?");
if(!cont){
    break;
}
}