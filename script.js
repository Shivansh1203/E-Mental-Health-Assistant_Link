let icon = document.querySelector(".nav");
// Changing Color of navbar on Scrolling 
// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;
//   // console.log(window.scrollY);- gives position of Y axis 

//   if(window.scrollY > 16){
//     icon.style.backgroundColor="rgba(201,213,233,255)";
//   }
//   else{
//     icon.style.removeProperty("background-color");
//   } 
// });
// $("#a,#b,#c").hover(function(){
//   $(this).css("background-color", "white");
//   }, // for mouseout condition this function would run
//     function(){
//   $(this).css("background-color", "rgb(160, 196, 190)");
// });

// For FIRST box i.e BOOST YOUR CONFIDENCE
function tre_thir_box() {
  document.getElementsByClassName("Wlcmpg")[0].style.visibility="visible";
  document.getElementsByClassName("fmenh")[0].style.visibility="hidden";  
  
  document.getElementById("a").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("b").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("c").style.backgroundColor = "white";
  
  document.getElementsByClassName("bgimg")[0].style.backgroundImage = "url('images/pic1.jpg')";
  document.getElementsByClassName("bgimg")[0].style.height = "43rem";
  document.getElementsByClassName("bgimg")[0].style. marginTop = "0px";
  // Scroll Bar for navbar
  document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    // console.log(window.scrollY);- gives position of Y axis 

    if (window.scrollY > 16) {
      icon.style.backgroundColor = "rgba(201,213,233,255)";
    }
    else {
      icon.style.removeProperty("background-color");
    }
  });

  // Assigning hover 
  $("#a,#b").hover(function(){
    $(this).css("background-color", "white");
    }, // for mouseout condition this function would run
      function(){
    $(this).css("background-color", "rgb(160, 196, 190)");
  });

}

// Changing background image on click
// For second box i.e AI CHATBOT
function tre_sec_box() {
  
  document.getElementById("a").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("c").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("b").style.backgroundColor = "white";
  
  document.getElementsByClassName("Wlcmpg")[0].style.visibility="hidden";
  document.getElementsByClassName("fmenh")[0].style.visibility="hidden";  
  document.getElementsByClassName("bgimg")[0].style.height = "48rem";
  document.getElementsByClassName("bgimg")[0].style. marginTop = "0px";
  document.getElementsByClassName("bgimg")[0].style.backgroundImage = "url('images/AI CHATBOT IMAGE.jpg')";
  document.querySelector(".nav").style.backgroundColor = "white";

  document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    // console.log(window.scrollY);- gives position of Y axis 
    icon.style.backgroundColor = "white";
  })

  $("#a,#c").hover(function(){
    $(this).css("background-color", "white");
    }, // for mouseout condition this function would run
      function(){
    $(this).css("background-color", "rgb(160, 196, 190)");
  });
  

}

// Changing background image on click
// For third box i.e MENTAL HEALTH SESSIONS 
function tre_fir_box() {
  
  document.getElementById("b").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("c").style.backgroundColor = "rgb(160, 196, 190)";
  document.getElementById("a").style.backgroundColor = "white";

  document.getElementsByClassName("Wlcmpg")[0].style.visibility="hidden";  
  document.getElementsByClassName("fmenh")[0].style.visibility="visible";  
  
  document.getElementsByClassName("bgimg")[0].style.height = "43rem";
  icon.style.backgroundColor = "rgba(201,213,233,255)";
  document.getElementsByClassName("bgimg")[0].style.backgroundImage = "url('images/Mental_health_sessions_img.png')";
  document.getElementsByClassName("bgimg")[0].style. marginTop = "80px";

  document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    // console.log(window.scrollY);- gives position of Y axis 

    icon.style.backgroundColor = "white";

  })
  $("#b,#c").hover(function(){
    $(this).css("background-color", "white");
    }, // for mouseout condition this function would run
      function(){
    $(this).css("background-color", "rgb(160, 196, 190)");
  });
}


