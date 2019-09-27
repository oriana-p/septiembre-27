window.addEventListener('scroll', function (){
   var video = document.getElementById("video");
   var posVideo = video.offsetTop;
   var currentScroll = window.pageYOffset;
   var widowHeight = widow.innerHeight;
   var alturaVideo = video.offsetHeight;
  

 if (posVideo + alturaVideo < currentScroll + widowHeight && 
    posVideo > currentScroll
  ) {
     video.classList.add("play");
  } else { 
      video.classList.remove("play");
  
 }

   //console.log("posVideo", posVideo);
   //console.log("currentScroll", currentScroll);
   //console.log("widowHeight", widowHeight);

});