const input=document.getElementById("input")
const img=document.getElementById("img")
const genarate=document.getElementById("genarate")
const download=document.getElementById("download")

genarate.addEventListener('click', async()=>{

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${input.value}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    img.src=response.url;
    img.style.display='block'
    const downloadButton = document.getElementById("downloadBtn");
    downloadButton.href = response.url;
    console.log(downloadButton)
    console.log(response.url)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})