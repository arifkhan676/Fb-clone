const textIn=document.getElementById("textInp");

const bt=document.getElementById("btPost");

const pid=document.getElementById("pId");

const secId = document.getElementById("spId");

bt.addEventListener('click',() => {

   pid.textContent=textIn.value;
   secId.innerHTML=new Date().toLocaleTimeString();

})


const x = document.createElement('div');
x.id="newPost2";

const t = document.getElementById("postDiv2").appendChild(x);


document.getElementById("newPost2").appendChild(pid);
document.getElementById("newPost2").appendChild(secId);

//console.log(t);

//console.log(t);

/*



*/