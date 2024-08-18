
const comp_choice=['ROCK','PAPER','SICSSORS'];
let u_ch=document.getElementById('u_choice');
let c_ch=document.getElementById('c_choice');
let won=document.getElementById('won')
function game(choice){
  let cmp_guess=comp_choice[Math.floor(Math.random()*comp_choice.length)];
  console.log(u_ch);
  if(choice==='reset')
    {
      u_ch.innerText=`Your Choice: `;
      // u_ch.style.color = 'red'
      c_ch.innerText=`Computer Choice: `;
      won.innerText='';
    }
  else{
  u_ch.innerText=`Your Choice: ${choice}`;
  // u_ch.style.color = 'red'
  c_ch.innerText=`Computer Choice: ${cmp_guess}`;
  if(choice==cmp_guess)
  {
    won.innerText='Game Tie';
    won.style.color="green";
  }
  else if(choice=='ROCK' && cmp_guess=='SICSSORS'){
    won.innerText='You Won';
    won.style.color="red";
  }
  else if(choice=='SICSSORS' && cmp_guess=='ROCK'){
    won.innerText='computer Won';
    won.style.color="red";
  }
  else if(choice=='PAPER' && cmp_guess=='SICSSORS'){
    won.innerText='computer Won';
    won.style.color="red";
  }
  else if(choice=='SICSSORS' && cmp_guess=='PAPER'){
    won.innerText='you Won';
    won.style.color="red";
  }
  else if(choice=='ROCK' && cmp_guess=='PAPER'){
    won.innerText='computer Won';
    won.style.color="red";
  }
  else{
    won.innerText='You Won';
    won.style.color="red";
  }
  }
}