  $(document).ready(function() {

    $('#nav-item-2').on('click', muestraMenu);

  });

  $(document).ready(function() {

    $('.cerrar').on('click', ocultaMenu);

  });

  function muestraMenu (){
    $('#menu-desplegado').toggleClass('visible');
  };

  function ocultaMenu (){
    $('#menu-desplegado').toggleClass('visible');
  };

  $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	  });
  });