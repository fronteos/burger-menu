$(function() {
	$(".burger-menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		/* Here you can toggle your menu baseing on your html markkup */
	});
});
