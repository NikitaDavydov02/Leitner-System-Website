$(document).ready(function(){
	$('.navigationbar__burger').click(function(event){
		$('.navigationbar__burger,.navigationbat__container').toggleClass('active');
		$('body').toggleClass('lock');
	});
});