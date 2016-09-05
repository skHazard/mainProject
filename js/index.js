
$(function () {

	$(".aside-about").hide();

	$("button").bind('click', function(){
		$(".aside-about").fadeIn(3000);
	});

	$("#send-msg").click(sendForm);

	function sendForm(e) {
		e.preventDefault();
		$.ajax({
			url: "https://formspree.io/kolesnuk_serg@komitex.net", 
			method: "POST",
			data: {
				fname: $("#fname").val(),
				lname: $("#lname").val(),
				email: $("#email").val(),
				phone: $("#phone").val(),
				subject: $("#subject").val(),
				message: $("#msg").val()

			},
			dataType: "json",
			success: function () {
				$("#thanks").html('Thank you for Submit!');
			}
		});
	}

});



// function sendForm(e){
//     e.preventDefault();
//     $.ajax({
//     url: "https://formspree.io/kolesnuk_serg@komitex.net", 
//     method: "POST",
//     data: {
//         first-name: $('#fname').val(),
// 			last-name: $('#lname').val(),
//         email: $('#email').val(),
// 			phone: $('#phone').val(),
// 			subject: $('#subject').val(),
//         message: $('#msg').val()
        
//     },
//     dataType: "json",
//     success: function(){
//         $('#thanks').html('Thank you for Submit!');
//     }
// });
// }


// $(function(){
    
//         $('.aside-about').hide();

//         $('button').bind('click', function(){
// 			$('.aside-about').fadeIn(3000);
// 			});

// });


