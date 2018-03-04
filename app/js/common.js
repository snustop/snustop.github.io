;$(function() {

	// filter slide (992) start
	if( $(window).width() < 992) {
		$('#filter-btn-slide').on('click', function(){
			$('#filters-wrap').stop().slideToggle(300);
			$('#filter-btn-slide i').toggleClass('rotate-arrow');
		});
	}
	// filter slide (992) end


	// sticky top-line START
	//offset() measures how far down the sticky element is from the top of the window
	var stickyTop = $(".top-line").offset().top;
	//whenever the user scrolls, measure how far we have scrolled
	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
  //check to see if we have scrolled past the original location of the sticky element
  if (windowTop > stickyTop) {
    //if so, change the sticky element to fised positioning
    $(".top-line").addClass("stuck");
  } else {   
  	$(".top-line").removeClass("stuck");
  }
	});
	// sticky top-line END

	// arrow to top START
	var root = $('html, body');
	$(window).scroll(function() {
				if ($(this).scrollTop() >= 800) {    // If page is scrolled more than 50px
						$('#top').fadeIn("fast");       // Fade in the arrow
					} else {
						$('#top').fadeOut("fast");      // Else fade out the arrow
					}
				});
		$('#top').click(function() {            // When arrow is clicked
			root.animate({
						scrollTop : 0                   // Scroll to top of body
					}, 300);
		});
	// arrow to top END


		// DISCOUNT START

		$('#discount-btn').on('click', function() { /* при клике на кнопку ПРИМЕНИТЬ КУПОН вызывается ф-ция */
			addDiscount();
		});

		function addDiscount() {   /* ф-ция обрабатывающая скидку */
			
			var cartDiscount = $('#cart-discount'); /* выбор элемента ответсвенного за общую сумму без скидки */
			var totalPrice = simpleCart.total();  /* общая сумма без скидки ТОЛЬКО ЦИФРЫ SimpleCartJs*/
			var totalItem = simpleCart.quantity(); /* общее количество товаров в корзине SimpleCartJs */
			var promCode = $('#promo-code').val().toLowerCase(); /* значения поля КУПОНА */
			var cartRate = $('#cart-rate'); /* описание скидки % и грн */

			if (promCode == "5disc") {
				cartDiscount.text(Math.ceil(totalPrice * .95) + " грн"); /* скидка 5% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .95);
				cartRate.text('Скидка 5%: ' + totalDiscount + ' грн');

			}	else if (totalItem >= 10 && promCode == "10cans") { /* если в корзине 10 или больше товаров и промокод = 10cans то ... */
				cartDiscount.text(Math.ceil(totalPrice * .93) + " грн"); /* скидка 7% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .93);
				cartRate.text('Скидка 7%: ' + totalDiscount + ' грн');

			} 

			else {
				cartRate.text('Скидка 0%: 0 грн');
			}

			if (promCode == "burda" || promCode == "zak" || promCode == "koval" || promCode == "kolosov" || promCode=="kochergin" || promCode=="nechaev" || promCode=="past" || promCode=="dvorak" || promCode=="black" || promCode=="ira" || promCode=="dnipro" || promCode=="zorya" || promCode=="dynamo") {
				cartDiscount.text(Math.ceil(totalPrice * .9) + " грн"); /* скидка 10% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .9);
				cartRate.text('Скидка 10%: ' + totalDiscount + ' грн');
			}

		};
		// DISCOUNT END


		// плавный скролл к комментариям START
		$('.link-reviews').click(function(){  
			$('html, body').stop().animate({
				scrollTop: $( $(this).attr('href') ).offset().top - 75
			}, 400);
			return false;
		});
		// плавный скролл к комментариям END


		// Форма заказа, приходит на почту START

		var formMail = $('#contact-form');

		function updateForm()  {

			var checkOrder = $('#checkout');
			if (checkOrder.length == 1) {  /* только на странице заказа */
				addDiscount();  /* при удалении или изменение кол-ва товаров на странице заказа, вызывается ф-ция с купонами */
			}


			simpleCart.ready(function() {
				$('.del').remove();
				simpleCart.each(function(item, x) {
					formMail.append('<input class="del" type="hidden" name="' + item.get('id') + ' Название" value="' + item.get('name') + '">');
					formMail.append('<input class="del" type="hidden" name="' + item.get('id') + ' Количество" value="' + item.get('quantity') + '">');
					formMail.append('<input class="del" type="hidden" name="' + item.get('id') + ' Цена за еденицу" value="' + item.get('price') + '">');
					formMail.append('<input class="del" type="hidden" name="' + item.get('id') + ' Общая стоимость" value="' + item.get('total') + '">');
				});
			});
		}
		updateForm();

		simpleCart.bind( 'update' , function(){

			updateForm();

			var btnAddCart = $('.btn-cart');
			var cartShake = $('.cart');
			cartShake.addClass('cart-move');
			cartShake.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
				function(e) {
					cartShake.removeClass('cart-move');
				});

		});

		// MAIL

		formMail.submit(function(event) {

			event.preventDefault();

			var promCodeForm = $('#promo-code').val();
			var cartTotalForm = $('#form-total').text();

			$.ajax({
				url: "//formspree.io/snustop.com.ua@gmail.com", 
				method: "POST",
				data: formMail.serialize() + "&coupon= " + promCodeForm + "&Итого= " + cartTotalForm,
				dataType: "json"
			}).done(function(){
				$("#phone").val("");
				$("#message").val("");
				simpleCart.empty();
				$("#checkout").html('<div class="text-center"><h1>Спасибо за заказ</h1><p>Ожидайте, Ваш заказ будет отправлен в ближайшее время.</p><p><a href="/">Перейти на главную</a></p></div>');
			}).fail(function(){
				alert("Ошибка");
			});
		});

		// Форма заказа, приходит на почту END





	});
