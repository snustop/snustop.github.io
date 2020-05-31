;$(function() {

	// filter slide (992) start
	if( $(window).width() < 992) {
		$('#filter-btn-slide').on('click', function(){
			$('#filters-wrap').stop().slideToggle(300);
			$('#filter-btn-slide i').toggleClass('rotate-arrow');
		});

		$('#filters-wrap a').on('click', function(){
			$('#filters-wrap').hide();
			$('#filter-btn-slide i').toggleClass('rotate-arrow');
		});
	}
	// filter slide (992) end


	// Filter раздаем класс active START
	// из-за PJAX потому что страница не перезагружается
	var slideItemLi = $('#filters-wrap li');
	$(slideItemLi).on('click', function(){
		$(slideItemLi).removeClass('active');
		$(this).addClass('active');
	});
	// Filter раздаем класс active END

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
		// при уводе фокуса и изменении применять промокод, т.к. иногда забывают нажимать на кнопку
		$('#promo-code').on('change paste keyup', function() {
			addDiscount();
		});

		function addDiscount() {   /* ф-ция обрабатывающая скидку */
			
			var cartDiscount = $('#cart-discount'); /* выбор элемента ответсвенного за общую сумму без скидки */
			var totalPrice = simpleCart.total();  /* общая сумма без скидки ТОЛЬКО ЦИФРЫ SimpleCartJs*/
			var totalItem = simpleCart.quantity(); /* общее количество товаров в корзине SimpleCartJs */
			var promCode = $('#promo-code').val().toLowerCase(); /* значения поля КУПОНА */
			var cartRate = $('#cart-rate'); /* описание скидки % и грн */

			if (totalItem >= 5 && totalItem < 10) {
				cartDiscount.text(Math.ceil(totalPrice * .95) + " грн"); /* скидка 5% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .95);
				cartRate.text('Скидка 5%: ' + totalDiscount + ' грн');

			}	else if (totalItem >= 10) { /* если в корзине 10 или больше товаров и промокод то ... */
				cartDiscount.text(Math.ceil(totalPrice * .9) + " грн"); /* скидка 7% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .9);
				cartRate.text('Скидка 10%: ' + totalDiscount + ' грн');

			} 

			else {
				cartRate.text('Скидка 0%: 0 грн');
			}

			if (promCode == "burda" || promCode == "zak" || promCode == "koval" || promCode == "kolosov" || promCode=="kochergin" || promCode=="nechaev" || promCode=="past" || promCode=="dvorak" || promCode=="black" || promCode=="ira" || promCode=="днепр" || promCode=="заря" || promCode=="шахта" || promCode=="динамо" || promCode=="zah") {
				cartDiscount.text(Math.ceil(totalPrice * .88) + " грн"); /* скидка 10% */
				var totalDiscount = totalPrice - Math.ceil(totalPrice * .88);
				cartRate.text('Скидка 12%: ' + totalDiscount + ' грн');
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
				return item.el.attr('title') + '<small>by Telegram <a href="//t.me/snustopUA" target="_blank" title="telegram"><i class="icon-telegram"></i>snustopUA</a></small>';
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

			var allFields = formMail.serialize();
			var orderList = JSON.parse(localStorage.getItem('simpleCart_items'));
			var orderListArray =[];
			for(var i in orderList) {
				orderListArray.push(orderList[i]);
			}

			$.ajax({
				url: "/telegram",
				method: "POST",
				data: allFields + '&some_param=' + cartTotalForm + '&some_code=' + promCodeForm + '&order_list=' + JSON.stringify(orderListArray),
				success: function (data){
					console.log(data);
				},
			}).done(function(){
				simpleCart.empty();

				root.animate({
						scrollTop : 0                   // Scroll to top of body чтоб пользователь прочитал всю информацию
					}, 300);

				$("#checkout").html('<div class="text-center">\
					<h1>Спасибо за заказ</h1>\
					<p><b>Отправка в 17:30</b><br>\
					Ожидайте, мы с Вами свяжемся (через смс или в месседжерах).<br>\
					<span class="text-muted">Если в течение 2-х часов не пришла смс (в рабочее время), то <a href="#contactModal" data-toggle="modal" data-target="#contactModal">свяжитесь с нами сами</a>. <br>Удобней всего писать в телеграмм.<br>Подпишитесь на наш канал в телеграмме, чтоб не пропустить акции и новинки, обещаем не спамить.<br><a style="color: #fff;" class="btn btn-telegram mt-2" href="//t.me/snustopUA" target="_blank" rel="nofollow" title="Канал telegram">Подписаться<i class="icon-telegram"></i></a></p>\
					<hr />\
					<div class="text-left mb-4">\
					<h2>Частые вопросы</h2>\
					<div class="accordion" id="accordionExample"><div class="card"><div class="card-header" id="headingOne"><h3 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Когда будет отправлен мой заказ?</button></h3></div><div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"><div class="card-body">Отправка каждый день в 17:30. (в выходные раньше: суббота в 16:00, воскресенье 15:00), если Вы заказали позже этого времени, то заказ будет отправлен завтра.</div></div></div><div class="card"><div class="card-header" id="headingTwo"><h3 class="mb-0"><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Сколько стоит доставка? </button></h3></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample"><div class="card-body">40 грн если без наложенного платежа, дополнительно +25 (если есть наложка).</div></div></div><div class="card"><div class="card-header" id="headingThree"><h3 class="mb-0"><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Когда придет мой заказ?</button></h3></div><div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample"><div class="card-body">Завтра (если это: Киев, Одесса, Львов, Днепр, Харьков и другие города), (иногда послезавтра, зависит от города). Вам придет смс-уведомление от Новой Почты.<br>Для более подробной информации <a href="#contactModal" data-toggle="modal" data-target="#contactModal">свяжитесь с нами</a>.</div></div></div><div class="card"><div class="card-header" id="headingFourth"><h3 class="mb-0"><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth"> Остались вопросы?</button></h3></div><div id="collapseFourth" class="collapse" aria-labelledby="headingFourth" data-parent="#accordionExample"><div class="card-body"><a href="#contactModal" data-toggle="modal" data-target="#contactModal">Свяжитесь с нами</a> удобнее всего писать в телеграмме.</div></div></div></div>\
					</div>\
					<p><a class="btn btn-primary" href="/">Перейти на главную</a></span></p></div>');
			}).fail(function(){
				alert("Ошибка, свяжитесь с нами: +380675680230 (удобнее всего в телеграмме). \nЛибо напишите нам смс с заказом и куда отправить");
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

		// pjax start
		$(document).pjax('a', '#pjax-container', {fragment: '#pjax-container'});
		// pjax end

	});
