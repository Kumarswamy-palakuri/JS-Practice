const base_url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const inputText=document.getElementById("inputText");
const btn=document.getElementById("btn");
// console.log(btn);
// console.log(inputText.value);
let result_head=document.getElementById("result_head");
let partsOfSpeech=document.getElementById("partsOfSpeech");
let phonotics=document.getElementById("phonotics");
let synonyms=document.getElementById("synonyms");
let example=document.getElementById("example");
let resultContainer=document.querySelector(".resultContainer");
let error=document.querySelector(".error");
function getData()
{
  // const url=`${base_url}${inputText.value.toLowerCase()}`;
  // const resp=await fetch(url);
  // const data=await resp.json();
  fetch(`${base_url}${inputText.value.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(sta);
          resultContainer.style.display="block";
          error.style.display="none";
          result_head.innerText=inputText.value;
          phonotics.innerText=data[0].phonetic;
          partsOfSpeech.innerText=data[0].meanings[0].partOfSpeech;
          synonyms.innerText=data[0].meanings[0].definitions[0].definition
          example.innerHTML=`<p class="example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
  // console.log(resp);
})
.catch(() => {
  resultContainer.style.display="none";
  error.style.display="block";
});
}
btn.addEventListener("click",getData);