import mos from "./morse.js";
let text = document.getElementById("textarea");
let btn = document.getElementById("btn");
let result = document.getElementById("result");


btn.addEventListener("click", () => {
  let res=""
  const textarea = text.value.trim().toUpperCase();
  if (textarea === "") {
    result.textContent = `Input field cannot be empty`;
  } 
  else if (textarea.includes(".")) {
    
  let res = "";  
  let morseWords = textarea.split(" / ");

  for (let word of morseWords) {
    let morseChars = word.split(" "); 
    for (let morseChar of morseChars) {

      let alphabetChar = Object.keys(mos.mos).find(key => mos.mos[key] === morseChar);
      if (alphabetChar) {
        res += alphabetChar; 
      }
    }
    res += " ";  
  }
    result.textContent = `${res}`;
  } 
  else{
    for (let char of textarea) {
      res += mos.mos[char] + " ";
    }
    result.textContent = `${res}`;
  }

  result.style.display = "flex";
});
