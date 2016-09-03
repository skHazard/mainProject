$(function(){
    
        $(".aside-about").hide();
});

 $(function(){
	$('button').bind('click', function(){
		$('.aside-about').fadeIn(3000);
	});
});