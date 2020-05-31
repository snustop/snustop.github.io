---
title: snus kiev
date: 2018-12-24 22:20:00 Z
position: 5
title-seo: Снюс Киев | Купить снюс в Киеве
descr: Доставка по городу, самовывоз метро нивки. В наличии siberia, odens, lyft, thunder, general и другие. Звоните +380675680230
img: "/img/blog/kiev/snus-kiev.jpg"
---

<section class="mb-4">
	<h1>Снюс Киев</h1>
	<div class="row">
		<div class="col-md-7">
			<img class="img-fluid" src="/img/blog/kiev/snus-kiev.jpg" alt="Снюс Киев">
		</div>
		<div class="col-md-5">
			<strong>Купить снюс в Киеве</strong>, есть три варианта доставки по Киеву:
			<ul>
				<li>1. Самовывоз (уточняйте <a href="//t.me/snustop" target="_blank" title="Telegram"><i class="icon-telegram"></i>Telegram @snustop</a>)</li>
				<li>2. Отправить курьером по городу (быстрая доставка, по метро 50-60 грн)</li>
				<li>3. Отправить Новой Почтой (самый оптимальный способ, экономится время, доставка по городу 30 грн. Если до 12 часов отправить, то в тот же день будет у Вас на отделении.</li>
			</ul>
			<p><a href="#contactModal" data-toggle="modal" data-target="#contactModal">Свяжитесь с нами</a> для уточнения информации. Для нас самый удобный способ связи - <a href="//t.me/snustop" target="_blank" title="Telegram"><i class="icon-telegram"></i>Telegram @snustop</a></p>
		</div>
	</div>
</section>

<section class="mb-4">
	<h2>Каталог снюса</h2>
	<div class="row">
		<!-- PRODUCTS start -->
		<!-- PRODUCT START -->
		{% assign sorted_items = site.products | sort:"position" %}
		{% for product in sorted_items offset:0 limit:6 %}
		
		{% include item-product.html %}

		{% endfor %}
		<!-- PRODUCT END -->
		<!-- PRODUCTS end -->
	</div>
	<div>
		<a class="btn btn-primary" href="/" role="button">Больше товаров</a>
	</div>
</section>