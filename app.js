let no = document.getElementById('no').value;
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  let link = `https://api.whatsapp.com/send?phone=${no}`;
    window.open(link);
})