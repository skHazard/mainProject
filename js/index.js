
$(function () {


	if(!detectmob()){
        $(".aside-about").hide();

    $("button").bind('click', function(){
		$(".btn-about").hide();
		$(".aside-about").delay(1000).fadeIn(3000);
	});
    }

	

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
				$(".please").hide();
				$(".thanks").show();
				$(".contact-form")[0].reset();
			}

		});
	}

});


// This is colapsing burger nav with clear CSS and JS
// Add onclick="burgerNav() to list <a> items to work!

// function burgerNav() {
//     var x = document.getElementById("nav-bar");
//     if (x.className === "menu") {
//         x.className += " responsive";
//     } else {
//         x.className = "menu";
//     }
// }


// This is the same colapsing burger nav using jQuery

$(".menu").click(function() {
  var navBar = $("#nav-bar");
  navBar.toggleClass("responsive");
});

function detectmob() {
   if(window.innerWidth <= 768 && window.innerHeight <= 1024) {
     return true;
   } else {
     return false;
   }
}


