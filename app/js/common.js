;$(function() {

	// filter slide (992) start
	if( $(window).width() < 992) {
		$('#filter-btn-slide').on('click', function(){
			$('#filters-wrap').stop().slideToggle(300);
			$('#filter-btn-slide i').toggleClass('rotate-arrow');
		});
	}
	// filter slide (992) end

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

		// Трясти корзину при добавлении товара (при нажатии на кнопку добавить в корзину) START
		var btnAddCart = $('.btn-cart');
		var cartShake = $('.cart');

		btnAddCart.on('click', function() {
			cartShake.addClass('cart-move');
			cartShake.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
				function(e) {
					cartShake.removeClass('cart-move');
				});
		});
		// Трясти корзину при добавлении товара (при нажатии на кнопку добавить в корзину) END

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

			if (promCode == "burda" || promCode == "zak" || promCode == "koval" || promCode == "kolosov" || promCode=="kochergin" || promCode=="nechaev" || promCode=="past" || promCode=="dvorak" || promCode=="black" || promCode=="ira" || promCode=="днепр" || promCode=="заря" || promCode=="шахта" || promCode=="динамо" || promCode=="zah") {
				cartDiscount.text(Math.ceil(totalPrice * .9) + " грн"); /* скидка 10% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .9);
				cartRate.text('Скидка 10%: ' + totalDiscount + ' грн');
			}

		};
		// DISCOUNT END

		// MAGNIFIC POPUP на главной section instagram START
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			fixedContentPos: false,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Instagram <a href="//www.instagram.com/snustop.com.ua/" target="_blank" title="instagram"><i class="icon-instagram"></i>snustop.com.ua</a></small>';
			}
		}
		});
		// MAGNIFIC POPUP на главной section instagram END


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
		});

		// MAIL
		var phone, message, promCodeForm, cartTotalForm;

		formMail.submit(function(event) {

			event.preventDefault();

			$('#send-order').html('Ждите...<i class="loading"></i>');

			phone = $('#phone').val();
			message = $('#message').val();
			promCodeForm = $('#promo-code').val();
			cartTotalForm = $('#form-total').text();

			// запишем в local storage START
			localStorage.setItem('phone', phone);
			localStorage.setItem('message', message);
			localStorage.setItem('coupon', promCodeForm);
			// запишем в local storage END

			$.ajax({
				url: "//formspree.io/snustop.com.ua@gmail.com", 
				method: "POST",
				data: formMail.serialize() + "&coupon= " + promCodeForm + "&Итого= " + cartTotalForm,
				dataType: "json"
			}).done(function(){
				simpleCart.empty();
				$("#checkout").html('<div class="text-center">\
					<h1>Спасибо за заказ</h1>\
					<p><b>Ваш заказ будет отправлен в 17:30</b><br>\
					Ожидайте, мы с Вами свяжемся (через смс или звонок).<br>\
					<span class="text-muted">Если в течение часа не пришла смс, то свяжитесь с нами сами: <a href="tel:+380675680230" title="Позвонить">+38 067 568 02 30</a></p>\
					<hr />\
					<div class="text-left">\
					<h2>Частые вопросы</h2>\
					<p><b>Когда будет отправлен мой заказ?</b><br>Отправка каждый день в 17:30.</p>\
					<p><b>Сколько стоит доставка?</b><br>Примерно 40 грн, +25(если есть наложка).</p>\
					<p><b>Когда придет мой заказ?</b><br>Завтра (иногда послезавтра, если это западная часть Украины). Вам придет смс-уведомление от Новой Почты.</p>\
					<p><b>Скиньте номер накладной!</b><br>После отправки в течение часа Вам придет номер накладной в смс.</p>\
					<p><b>Остались вопросы?</b><br>Пишите смс<a href="sms:+380-67-568-0230" title="Отправить смс"> 0675680230 </a> либо звоните <a href="tel:+380675680230" title="Позвонить">+38 067 568 02 30</a> нам удобнее смс :)</p>\
					</div>\
					<p><a class="btn btn-primary" href="/">Перейти на главную</a></span></p></div>');
			}).fail(function(){
				alert("Ошибка, Ваш браузер Safari, оформите заказ c другого браузера или свяжитесь с нами: +380675680230. \nЛибо напишите нам смс с заказом и куда отправить");
			});
		});
		// Форма заказа, приходит на почту END

		// ЗАПОМИНАЕТ ДАННЫЕ телефон, сообщение и промо-код START
		var phoneStorage, messageStorage, promoCodeStorage;
		
		if (localStorage.getItem('phone')!==null) {
			phoneStorage = localStorage.getItem('phone');
			messageStorage = localStorage.getItem('message');
			promoCodeStorage = localStorage.getItem('coupon');
			$('#phone').val(phoneStorage);
			$('#message').val(messageStorage);
			$('#promo-code').val(promoCodeStorage);

			$('#discount-btn').click();
		}	
		// ЗАПОМИНАЕТ ДАННЫЕ телефон, сообщение и промо-код END

		// добавляет ссылку когда копируют START
		function addLink() {
        //Get the selected text and append the extra info
        var selection = window.getSelection(),
        pagelink = '<br /><br /> Подробнее: ' + document.location.href,
        copytext = selection + pagelink,
        newdiv = document.createElement('div');

        //hide the newly created container
        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';

        //insert the container, fill it with the extended text, and define the new selection
        document.body.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);

        window.setTimeout(function () {
        	document.body.removeChild(newdiv);
        }, 100);
      }

      document.addEventListener('copy', addLink);
		// добавляет ссылку когда копируют END

	});
