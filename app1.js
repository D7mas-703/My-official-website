
 
 let btn = document.querySelector("button") ;

 window.onscroll =function () {
  if( window.scrollY >= 550){ 
   btn.style.cssText = "transition: all; display : block ;transition: all; "   ; 
      if (window.scrollY >= 1140)
   btn.style.cssText = "background-color: white ; display : block ;transition: all; ";  
    if (window.scrollY >= 1600) 
    btn.style.cssText = "background-color: #0CC0DF ; display : block ;transition: all; ";  
  } 
  else 
    btn.style.cssText = "display : none ;" ;
 }
 
 
 btn.onclick =function () {
  window.scrollTo ({
     top:0,
     behavior:"smooth" ,
  });
 } ;
 