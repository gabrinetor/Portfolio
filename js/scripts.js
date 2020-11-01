const slide = document.querySelector('.slides');
const slideImagens = document.querySelectorAll('.slides img');

//Botões
const btnAntes = document.querySelector('#btnAntes');
const btnDepois = document.querySelector('#btnDepois');

//Contador
let cont = 1;
const tam = slideImagens[0].clientWidth;

slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';

//Botões Acionadores
btnDepois.addEventListener('click', ()=>{
    if(cont >= slideImagens.length - 1) return;
    slide.style.transition = "transform 0.2s ease-in-out";
    cont++;
    slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
});

btnAntes.addEventListener('click', ()=>{
    if(cont <= 0) return;
    slide.style.transition = "transform 0.2s ease-in-out";
    cont--;
    slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
});


slide.addEventListener('transitionend',()=>{
    if(slideImagens[cont].id === 'ultimoClone'){
        slide.style.transition = 'none';
        cont = slideImagens.length -2;
        slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
    }
    if(slideImagens[cont].id === 'primeiroClone'){
        slide.style.transition = 'none';
        cont = slideImagens.length - cont;
        slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
    }
});

console.log(slideImagens.length);
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

