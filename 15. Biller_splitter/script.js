//left
let ctip=document.getElementById("custom-tip")
let bill=document.getElementById("bill")
let numPeo=document.getElementById("numPeo")
//right
const tip=document.getElementById("tip");
const total=document.getElementById("total");
const eachsplit=document.getElementById("eachsplit");
const right=document.querySelector(".right")
const reset=document.querySelector("#reset")

let ival=0

function print()
{
  right.innerHTML=`
          <p id="tip">Tip amount<span>₹0</span></p>
          <p id="total">Total <span>₹0</span></p>
          <p id="eachsplit">Each Person Bill <span>₹0</span></p>
          <button id="reset" onclick="re_set()">Reset</button>`
}

function re_set()
{
  print()
  return
}

function tip_value(val)
{
  ctip.value=val
  
}

function generate_bill()
{
  numPeo.value=(numPeo.value==0)?1:numPeo.value;

  ival=ctip.value
  right.innerHTML=`
          <p id="tip">Tip amount<span>₹${((bill.value)*(ival/100)).toFixed(2)}</span></p>
        <p id="total">Total <span>₹${parseInt((bill.value)*(ival/100))+parseInt(bill.value)}</span></p>
        <p id="eachsplit">Each Person Bill <span>₹${((parseInt((bill.value)*(ival/100))+parseInt(bill.value))/(numPeo.value)).toFixed(2)}</span></p>
<button id="reset" onclick="re_set()">Reset</button>  `
  right.style.display='flex'
  if(bill.value==0)
    {
      alert(`Enter bill greater than 0`)
      print()
    }
}

