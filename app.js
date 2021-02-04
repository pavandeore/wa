let no = document.getElementById('no').value;
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  window.open(`https://api.whatsapp.com/send?phone=${no}`)
})