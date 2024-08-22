const num=parseInt(Math.random()*100);
let NoOf=0;

const input=document.getElementById("input");
let btn=document.getElementById("btn");
let guessLevel=document.getElementById("guessLevel");
let NoOfGuesses=document.getElementById("NoOfGuesses");
let GuessedNos=document.getElementById("GuessedNos");
let text=``;
btn.addEventListener("click",()=>
{
  const diff=(input.value)-(num);
  if(input.value.trim() !== ''){
    guessLevel.style.color="black";
    NoOf+=1;
    // GuessedNos.innerHTML=`<p id="GuessedNos">Your guesses :${text}</p>`;
    NoOfGuesses.innerHTML=`<p id="NoOfGuesses">No. of guesses: ${NoOf}</p>`;
    text+=`${input.value},`;
  GuessedNos.innerHTML=`<p id="GuessedNos">Your guesses :${text}</p>`;
  // text+=`${input.value},`;
    if(diff< -10){
    guessLevel.innerHTML=`<p id="guessLevel">Your guess is too low</p>`;
      }
    else if(diff>=-10 && diff<-5)
    {
    guessLevel.innerHTML=`<p id="guessLevel">Your guess is low</p>`;
    }
  else if(diff>=-5 && diff<0)
    {
      guessLevel.innerHTML=`<p id="guessLevel">Your guess is closest but low</p>`;
    }
    else if(diff> 10)
      guessLevel.innerHTML=`<p id="guessLevel">Your guess is too high</p>`;
    else if(diff<=10 && diff>5)
    {
      guessLevel.innerHTML=`<p id="guessLevel">Your guess is high</p>`;
    }
    else if(diff<=5 && diff>0)
    {
        guessLevel.innerHTML=`<p id="guessLevel">Your guess is closest but high</p>`;
    }
    else if(diff==0){
        guessLevel.innerHTML=`<h3 id="guessLevel">Hurrey! you win</h3>`;
        guessLevel.style.paddingBottom="5px";
        guessLevel.style.color="#d17ef7";
        GuessedNos.innerHTML=`<p id="GuessedNos">You guessed it in ${NoOf} guesses</p>`;
        NoOfGuesses.innerHTML=`<p id="NoOfGuesses">The number is ${num}</p>`;
    }
       
  // NoOf+=1;
  // // GuessedNos.innerHTML=`<p id="GuessedNos">Your guesses :${text}</p>`;
  // NoOfGuesses.innerHTML=`<p id="NoOfGuesses">No. of guesses: ${NoOf}</p>`;
    }
  else{
guessLevel.innerHTML=`<p id="guessLevel">Check entered value</p>`;
guessLevel.style.paddingBottom="5px";
        guessLevel.style.color="red";
  }
  // NoOfGuesses.innerHTML=`<p id="NoOfGuesses">No. of guesses: ${NoOf}</p>`;
  // GuessedNos.innerHTML=`<p id="GuessedNos">Your guesses :${text}</p>`;
  }
)