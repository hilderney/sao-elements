$(document).ready(function() {

	$('.menu li').click(function(event) {
		activate(this);
		
	});
});

function activate(e){
	$('li.active').removeClass('active');
	$(e).closest('li.item').toggleClass('active');
}