const textIn=document.getElementById("textInp");

console.log(textIn);

const bt=document.getElementById("btPost");

const pid=document.getElementById("pId");

const secId = document.getElementById("spId");

bt.addEventListener('click',() => {

   pid.textContent=textIn.value;
   secId.innerHTML=new Date();

});
document.getElementById("root").appendChild(secId);