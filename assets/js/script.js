
;(function(){

	function submit(){
		alert("Lorem Ipsum");
	}

	function validate(){

		$('.error').css("display", "none");

		var validate = true;
		var name  	 = $('#name');
		var email 	 = $('#email');
		var phone  	 = $('#phone');
		var mensage  = $('#mensage');
		
		if(name.val() == ""){
			name.parent().find(".error").css("display", "block");
			validate = false;
		}

		if(email.val() == ""){
			email.parent().find(".error").css("display", "block");
			validate = false;
		}

		if(phone.val() == ""){
			phone.parent().find(".error").css("display", "block");
			validate = false;
		}

		if(mensage.val() == ""){
			mensage.parent().find(".error").css("display", "block");
			validate = false;
		}

		return validate;

	}

	function btnSubmit(){

		$('body').on("click", '#send-form', function() {
			if(validate()){
				submit();
			}
		});
	}

	function maskPhone(){
		var phone = $("#phone");
        phone.mask('(000) 00000-0000');
	}

	function accordion(){
		
		$('body').on("click", '.accordion', function() {
				
			var clicked = $(this);
			var hasClass = clicked.hasClass('active');

			$('.accordion').each(function(){
				$(this).next().css("display", "none");
				$(this).removeClass('active');
				$(this).find('.arrow-down').css("display", "block");
				$(this).find('.arrow-up').css("display", "none");
			});

			if(!hasClass){
				clicked.addClass("active");
		    	clicked.next().css("display", "block");
		    	$(this).find('.arrow-down').css("display", "none");
		    	$(this).find('.arrow-up').css("display", "block");
			}

		    

	  	});
	
	}

	$(function(){
		accordion();
		maskPhone();
		btnSubmit();
	});

})();