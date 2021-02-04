
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  let no = document.getElementById('no').value;
  let link = "https://wa.me/91"+no;
    window.open(link);
})