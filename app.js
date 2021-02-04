
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
  let no = document.getElementById('no').value;
  let link = "https://wa.me/"+no;
    window.open(link);
})