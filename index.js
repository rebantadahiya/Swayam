
$('h1').addClass('animation');
$('p').addClass('animation');
$('li').addClass('animation');
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
