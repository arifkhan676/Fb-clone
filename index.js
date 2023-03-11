
const takeArea=document.getElementById("textArea");

const bt=document.getElementById("btPost");

const pid=document.getElementById("pId");

const secId = document.getElementById("spId");

bt.addEventListener('click',() => {

   pid.textContent=takeArea.value;
   secId.innerHTML=new Date();

})
document.getElementById("root").appendChild(pid);
document.getElementById("root").appendChild(secId);