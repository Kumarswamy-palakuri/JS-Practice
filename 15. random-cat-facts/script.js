const btn=document.getElementById("btn")
const desc=document.getElementById("desc")

const apiUrl =`https://meowfacts.herokuapp.com/`

btn.addEventListener('click',fetchData())

async function fetchData() {

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    desc.innerText=`${data.data}`;

    console.log(data.data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


