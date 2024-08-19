
const comp_choice=['ROCK','PAPER','SICSSORS'];
let u_ch=document.getElementById('u_choice');
let c_ch=document.getElementById('c_choice');
let won=document.getElementById('won');
let y_sc=document.getElementById('y_sc');
let c_sc=document.getElementById('c_sc');
let y=0;
let c=0;
function game(choice){
  let cmp_guess=comp_choice[Math.floor(Math.random()*comp_choice.length)];

  if(choice==='reset')
    {
      u_ch.innerText=``;
      // u_ch.style.color = 'red'
      c_ch.innerText=``;
      won.innerText='';
      y_sc.innerText='00';
      c_sc.innerText='00';
      y=0;
      c=0;
    }
  else{
  u_ch.innerText=`${choice}`;
  u_ch.style.color = '#FEFAE0';
  c_ch.innerText=`${cmp_guess}`;
  c_ch.style.color = '#FEFAE0';
  if(choice==cmp_guess)
  {
    won.innerText='Game Tie';
    won.style.color="#FAA916";
  }
  else if(choice=='ROCK' && cmp_guess=='SICSSORS'){
    won.innerText='You Won';
    won.style.color="#1B1B1E";
    y+=1
  }
  else if(choice=='SICSSORS' && cmp_guess=='ROCK'){
    won.innerText='computer Won';
    won.style.color="#1B1B1E";
    c+=1
  }
  else if(choice=='PAPER' && cmp_guess=='SICSSORS'){
    won.innerText='computer Won';
    won.style.color="#1B1B1E";
    c+=1
  }
  else if(choice=='SICSSORS' && cmp_guess=='PAPER'){
    won.innerText='you Won';
    won.style.color="#1B1B1E";
    y+=1
  }
  else if(choice=='ROCK' && cmp_guess=='PAPER'){
    won.innerText='computer Won';
    won.style.color="#1B1B1E";
    c+=1
  }
  else{
    won.innerText='You Won';
    won.style.color="#1B1B1E";
   y+=1
  }
  y_sc.innerText='0'+y;
  y_sc.style.color="white";
  c_sc.innerText='0'+c;
  c_sc.style.color="white";
  }

}