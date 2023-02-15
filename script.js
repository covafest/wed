$(document).ready(function(){

  /*DESCENDER A MAS INFO*/
  $(".masinfo").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#article-wrap').offset().top
    }, 2000);});

  /*SUBIR A TOP DE LA PAGINA*/
  $(".arriba").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0 }, 2000);});

  /*IR A LA PAGINA ANTERIOR*/
  $('.volver').click(function() {
    window.history.back();
    return false;
  });
  
  /*ANIMACION ICONO MENU*/
  $('#menu-icono').click(function(){
    $(this).toggleClass('open');
  });

  /*DESPLEGAR MENU*/
  $(document).ready(function() {
    $('#nav-item-2').on('click', muestraMenu);
  });

  function muestraMenu (){
  $('#menu-desplegado').toggleClass('visible');
  };
    
  /*CTA CONFIRMACION IR A FORMULARIO*/
  $('#CTA-wrap').on('click', alFormulario);

  function alFormulario (){
    window.open('confirmacion.html');
  };

    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
        $("#icono-pregunta", this).removeClass("rotar");

        

      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active > img").removeClass("rotar");
        $(".accordion-list > li.active").removeClass("active");
        $("#icono-pregunta", this).addClass("rotar");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });

  });

  $(".class").click(function(){
    $(".subclass", this).css("visibility","visible");
});


