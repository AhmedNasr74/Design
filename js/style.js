$(document).ready(
	function() {
		
$(".loading").fadeOut(2000 , function(){	
$("body").css("overflow","auto");		
});
    $(".caption").animate({bottom : '50%'},1000)
});



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});