let no = document.getElementById('no').value;
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  let link = `https://api.whatsapp.com/send?phone=91${no}`;
    window.open(link);
    no = "";
})