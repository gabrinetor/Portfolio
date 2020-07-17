$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("rolagem");
      $(".va-ao-topo").fadeIn();
    }
    else{
      $(".navbar").removeClass("rolagem");
      $(".va-ao-topo").fadeOut();
    }
  });

  $(".va-ao-topo").click(function(){scroll(0,0)});

  $('.menu-responsivo').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

});

