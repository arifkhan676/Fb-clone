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


   var fileInput = document.getElementById("myInputId");
   var uploadimg = "";
   fileInput.addEventListener("change",function(){
      const reader = new FileReader();
      reader.addEventListener("load",()=>{
      uploadimg=reader.value;
      document.getElementById("pd").style.backgroundImage= `url(${uploadimg})`;
      });
    reader.readAsDataURL(this.files[0]);
       
   })

   function popUp(){
      return ;
   }



 //  addEventLister learning***




/*
function uploadFile(){


}

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