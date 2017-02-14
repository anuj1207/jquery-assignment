window.onload=showtime
function gettime(){
  var date = new Date();
  time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
}
function showtime(){
  setInterval(gettime,1000);
}
$(document).ready(function(){

  $(".block").on({
         mouseenter: function(){
             $(this).css("background-color", "lightgray");
         },

         mouseleave: function(){
             $(this).css("background-color", "");
         }
    })

    $("#b1").click(function(){
       $("#d1").slideToggle("slow");
     })
    $("#b2").click(function(){
      $("#d2").slideToggle("slow");
    })
    $("#b3").click(function(){
     $("#d3").slideToggle("slow");
   })
   $("#b4").click(function(){
    $("#d4").slideToggle("slow");
  })
    $("#b5").click(function(){
     $("#d5").slideToggle("slow");
    })

    $("#heading").click(function () {
      $('#heading').animate({
        backgroundColor:'#4286f4',
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px',
      });
    })

    $("#tog").click(function () {
      $("#more").slideDown(2000).slideUp(2000);
    })
})
