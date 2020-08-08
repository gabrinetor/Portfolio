$(function () {
  var fileName = "../cv/Curriculo Gabriela da Rosa Neto.pdf";
  $("#btnShow").click(function () {
      $("#dialog").dialog({
          modal: true,
          title: fileName,
          width: 860,
          height: 600,
          open: function () {
              var object = "<object data=\"{FileName}\" type=\"application/pdf\" width=\"790px\" height=\"500px\">";
              object = object.replace(/{FileName}/g, "Files/" + fileName);
              $("#dialog").html(object);
          }
      });
  });
});

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

