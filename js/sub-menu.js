$(document).ready(function() {

	menu();	
});

function menu(){
	
	$nav = $('.nav');
	$nav_item = $nav.find('li');
	$dropdown = $nav_item.has('ul').addClass('dropdown');
	$back_btn = $nav.find(".sub-menu").prepend('<button class="js-back"> < </button>');
	$('.slide-out li').prop('disabled', 'true');

	console.log($nav);
	console.log($nav_item);
	console.log($dropdown);



	$dropdown.on("click", function(e) {
		console.clear();

		console.debug('$dropdown.on("click")');
		e.stopPropagation();
		e.preventDefault();

    	// Fecha outros items LI abertos
      	$(this).parent().has('li').children('.is-open').removeClass('is-open');
      	// Adiciona classe dizendo q a LI está aberta
      	$(this).addClass("is-open");
      	// Adiciona classe ao UL dizendo que está no atual item
      	$(this).parent().addClass("slide-out");

      	lvl = lvl = $('.is-open').first().parent();

      	if (lvl.hasClass('level1-active')) { 
      		lvl = $('.is-open').first().parent().addClass('level1-active');
      		console.log('level 1 ativo');
      	}
      	else if (lvl.hasClass('level2-active')) {
      		lvl = $('.is-open').first().parent().addClass('level2-active');
      		console.log('level 2 ativo'); 
      	}
      	else{
      		lvl = $('.is-open').first().parent().addClass('level2-active');
      		console.log('level 1 ativo'); 
      	}

  });

	$back_btn.on("click", ".js-back", function(e) {
		console.clear();

		console.debug('$back_btn.on("click")');
		e.stopPropagation();


		$(this).parents('.is-open').first().removeClass("is-open");
		$(this).parents('.slide-out').first().removeClass("slide-out");

		a =$('li.is-open').parent().parent().parent();


		$(a).children('.lv1').children('.slide-out').children('.is-open').removeClass('is-open');
		$(a).children('.lv1').children('.slide-out').removeClass('slide-out');
     	
     	console.log(a);

 });
}