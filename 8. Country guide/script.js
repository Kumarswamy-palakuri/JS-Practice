// const base_url="`https://restcountries.com/v3.1/name/${countryName}?fullText=true`";
let inputText=document.getElementById("inputText")
let btn=document.getElementById("btn");
let resultContainer=document.querySelector(".resultContainer");
function getData()
{
  fetch(`https://restcountries.com/v3.1/name/${inputText.value.toLowerCase()}?fullText=true`)
        .then((response) => response.json())
        .then((data) => {
           /* console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", ")
        );*/
        // console.log(resultContainer);
          resultContainer.innerHTML=`
          <div class="image-deatils">
        <img src=${data[0].flags.png} alt="">
        <h2>${data[0].name.common}</h2>
      </div>
      <div class="country-deatils">
        <p class="">Capital : <span id="capital">${data[0].capital[0]}</span></p>
        <p class="">Continent : <span id="continent">${data[0].continents[0]}</span></p>
        <p class="">Population : <span id="population">${data[0].population}</span></p>
        <p class="">Currency : <span id="currency">${Object.keys(data[0].currencies)[0]}</span></p>
        <p class="">Common language : <span id="commonlanguage">${Object.values(data[0].languages).toString().split(",").join(", ")}</span></p>
      </div>`;
      resultContainer.style.padding="15px";
    /*  console.log(data[0]);
      console.log(data[0].population);*/
})
.catch(() => {

});
}
btn.addEventListener("click",getData);