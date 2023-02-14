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

  });

