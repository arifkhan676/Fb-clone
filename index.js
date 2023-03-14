const textIn=document.getElementById("textInp");

const bt=document.getElementById("btPost");



bt.addEventListener('click',() => {

   
   const x = document.createElement('div');
   x.classList.add("newPost2");
   
   const pid=document.createElement('p');
   const dateid=document.createElement('p');

   pid.classList.add("pId");
   dateid.classList.add("dateId");

   pid.textContent=textIn.value;
   dateid.innerHTML=new Date().toLocaleTimeString();

   x.appendChild(pid);
   x.appendChild(dateid);

document.getElementById("postDiv2").appendChild(x);
textIn.value='';
})

/*
const x = document.createElement('div');
x.classList.add("newPost2");
x.appendChild(pid);
x.appendChild(secId);
//document.querySelector(".newPost2").appendChild(pid);
//document.querySelector(".newPost2").appendChild(secId);
const t = document.getElementById("postDiv2").appendChild(x);
*/



//console.log(t);

//console.log(t);

/*



*/