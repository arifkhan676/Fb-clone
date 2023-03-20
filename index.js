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
}

var takePic = document.getElementById("profile-pic");
var fileInput = document.getElementById("myInputId");
fileInput.onchange=function (){
takePic.src = URL.createObjectURL(fileInput.files[0]);
}



/* addEventLister learning***


   const img = document.createElement('img');
   img.classList.add('postImg');
   img.id="profile-pic"
   img.src = "images/profile.png";
   
   var takePic = document.getElementById("profile-pic");
   var fileInput = document.getElementById("myInputId");
   fileInput.onchange=function (){
   takePic.src = URL.createObjectURL(fileInput.files[0]);
 }



              <img class="xImg" src="images/profile.png" width="300px" height="300px" id="profile-pic"  alt="">
              <input  type="file" id="myInputId"  accept="image/png, image/jpg ,image/jpeg">



           <button class="btn-pro" onclick="uploadFile()"> <i class="fa-solid fa-image"></i>  </button> 



 var file = fileInput.files[0]; //koto gula pic nicchi array te insert hibe
   var formData = new FormData();  //FormData oi pic or value gulo pair akare represnt korbe & XMLHttpRequest() diye 
   formData.append("file",file); // file append kortese
   var xhr = new XMLHttpRequest(); // XMLHttpRequest() diye data retrieve korbe URL diye page theke
   xhr.open("POST","upload.php",true); //pic nicche r boolean diye test krtese
   xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200 ){
         console.log(xhr.responseText);
      }
   };
   xhr.send(formData);

*/