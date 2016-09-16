$(document).ready(function() {
	$menus = $('.menu-content');
	$menu_btn = $menus.children('div.icon');
	$menu_btn.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();
		$menu = $(this).parent();
		$menu.toggleClass('collapsed');
		menu($menu);
		console.log($(this).parent());
	});
});

function menu(e){
	$menu = e.find('div.menu-wrapper');
	$nav = $menu.has('.nav');
	$nav_item = $nav.find('li');
	$dropdown = $nav_item.has('ul').addClass('dropdown');
	$back_btn = $nav.find('.sub-menu');
    $back_btn.on("click", ".js-back", function(e) {
		e.stopPropagation();
		e.preventDefault();
		// removendo a Classe do Item anterior IS-OPEN
		$(this).parent('div.sub-menu').parent('li.is-open').removeClass('is-open');
		// removendo a Classe do Item anterior SLIDE-OUT
		$(this).parent('div.sub-menu').parent('li.dropdown').parent('.slide-out').removeClass('slide-out');
      	//passando o MENU-WRAPPER
		checkOpenedLevel($menu);
	});

    $dropdown.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();
    	// Fecha outros items LI abertos
    	$(this).parent().has('li').children('.is-open').removeClass('is-open');
      	// Adiciona classe dizendo q a LI está aberta
      	$(this).addClass("is-open");
      	// Adiciona classe ao UL dizendo que está no atual item
      	$(this).parent().addClass("slide-out");
      	//passando o MENU-WRAPPER
      	checkOpenedLevel($menu);
    });
}

function checkOpenedLevel(e,text){
	lv0 = e.children('ul');
	lv1 = e.children('ul.slide-out').children('li.is-open').children('div');
	lv2 = e.children('ul.slide-out').children('li.is-open').children('div').children('ul.slide-out').children('li.is-open').children('div');
	if (lv2.hasClass('lv2')) {
		e.removeClass('lv1-open');
		e.addClass('lv2-open');
		e.parents('.menu-content').removeClass('lv1');
		e.parents('.menu-content').addClass('lv2');
	}
	else if (lv1.hasClass('lv1')) {
		e.removeClass('lv2-open');
		e.addClass('lv1-open');
		e.parents('.menu-content').removeClass('lv2');
		e.parents('.menu-content').addClass('lv1');
	}
	else if (!lv0.hasClass('slide-out')) {
		e.removeClass('lv1-open');
		e.removeClass('lv2-open');
		e.find('.is-open').removeClass('is-open');
		e.find('.slide-out').removeClass('slide-out');
		e.parents('.menu-content').removeClass('lv1');
		e.parents('.menu-content').removeClass('lv2');
	}
	else{
		console.log('algum erro com o menu, verifique se contem todos os elementos e subelementos de acordo com as especificações');
	}
}