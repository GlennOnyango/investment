$( document ).ready(function() {

  $(".enta-activate").click(()=>{


    $(".main-table").toggle( "slide" );
    
    $(".main-title").html(`Welcome to Enterprise plan .
    <small class="text-muted">Downgrade or upgrade at any time.</small>`);
$(".enterprise").removeClass("d-none");
$(".p-btn").removeClass("d-none");

});


  $(".busi-activate").click(()=>{


    $(".main-table").toggle( "slide" );
    
    $(".main-title").html(`Welcome to Business plan .
    <small class="text-muted">Downgrade or upgrade at any time.</small>`);
$(".business").removeClass("d-none");
$(".p-btn").removeClass("d-none");

});



  $(".indv-activate").click(()=>{


    $(".main-table").toggle( "slide" );
    
    $(".main-title").html(`Welcome to Individual plan .
    <small class="text-muted">Downgrade or upgrade at any time.</small>`);
$(".individual").removeClass("d-none");
$(".p-btn").removeClass("d-none");
$("footer").toggleClass("fixed-bottom");
  });


  $(".p-btn").click(()=>{


    $(".main-table").toggle( "slide" );
    
    $(".main-title").html(`Choose the plan that’s right for you.
    <small class="text-muted">Downgrade or upgrade at any time.</small>`);
$(".enterprise").addClass("d-none");
$(".business").addClass("d-none");
$(".individual").addClass("d-none");

$(".p-btn").addClass("d-none");
$("footer").removeClass("fixed-bottom");

});

  $( window ).scroll(function() {
    //navbar effect
    if(window.scrollY > 0){
      $( "#mynav" ).addClass("fixed-top");

      $( "#mynav" ).css("background-color", "rgba(0, 0,0, 0.9)");
      
    }else{
      $( "#mynav" ).removeClass("fixed-top");

      $( "#mynav" ).css("background-color", "rgba(0, 0,0, 0.3)");
    }



    
    
  });
  $('#advert').not('.scroll-wrapper').on("scroll", function(){
    console.log('content is scrolling');
});


});

