
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  let no = document.getElementById('no').value;
  let final = "91"+no;
  let link = "https://wa.me/"+final;
    window.open(link);
})