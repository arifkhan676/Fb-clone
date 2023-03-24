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
function gotoInput(){
   const input = document.createElement('input');
   input.type="file";
   input.id="myInputId";
   input.accept="image/png, image/jpg ,image/jpeg";
   document.getElementById("postDiv1").appendChild(input);

   const img = document.createElement('img');
   img.classList.add('postImg');
   img.id="profile-pic"
   img.src = "images/profile.png";
   img.width=300;
   img.height=300;
   document.getElementById("pd").appendChild(img);

   var takePic = document.getElementById("profile-pic");
   var fileInput = document.getElementById("myInputId");
   fileInput.onchange=function (){
   takePic.src = URL.createObjectURL(fileInput.files[0]);
}
}




/*
popup

<div class="popup" id="popup" >
  <img src="images/tick.png" alt="">
   <h2>Thank You!</h2>
   <p>Your information has successfully submitted!</p>
   <button type="submit"  class="btn btn-outline-dark" onClick="closePopup()">Ok</button> 
 </div>
</div>

let popup=document.getElementById("popup");
function openPopup(){
 popup.classList.add("open-popup");
}
function closePopup(){
 popup.classList.remove("open-popup");
}

addEventLister learning***
 */


