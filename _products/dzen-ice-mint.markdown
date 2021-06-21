---
title: dzen-ice-mint
date: 2020-10-01 20:31:00 Z
position: 7
title-seo: Снюс Dzen ice Mint
descr: Снюс дзен с освежающим вкусом мяты. Крепость 50 мг никотина, 25 белых порций.
  Порции slim - удобно сидят под губой. Никотиновый удар очень сильный.
product-name: "Dzen сладкая мята \U0001F343 50 мг"
product-alt: Снюс Dzen ice Mint
strong: Очень крепкий
brand: Dzen
composition: Белый
image: "/img/products/dzen/dzen-mint.jpg"
availability-descr: В наличии
has_availability: true
gramm: 16
nicotine: 50
portions: 25
taste: Сладкая мята с ментолом
form: Порционный, белый, slim
composition-product: Целлюлоза, вода, пищевой глицерин, никотин, сода, карбонат натрия,
  пищевой ароматизатор
similar-product_body: "<p>Похожие товары: <small>Жмите на картинку, Вас перекинет
  на страницу данного продукта</small></p>\n<div>\n\t\t<a href=\"/g4-deep-freeze-slim-all-white\"><img
  style=\"width:32%\" class=\"img-fluid\" src=\"/img/products/g4-deep-freeze.jpg\"
  alt=\"g4 Deep freeze\"></a>\n\t\t<a href=\"/lyft-x-strong-freeze-slim-white\"><img
  style=\"width:32%\" class=\"img-fluid\" src=\"/img/products/lyft-x-strong-freeze-slim-white.png\"
  alt=\"Лифт фриз\"></a>\n<a href=\"/g4-cryo-slim-all-white-super-strong\"><img style=\"width:32%\"
  class=\"img-fluid\" src=\"/img/products/g4-cryo-slim-all-white-super-strong.jpg\"
  alt=\"Снюс ванильный крио\"></a>\n</div>"
---

Снюс Dzen Ice Mint — бестабачная жевательная смесь, с освежающим вкусом мяты. Вкус и запах очень приятный, не такой резкий и приторный.<br>
Порции длинные и тонкие (очень удобные), белые и немного влажные, не содержат табака, вместо него используется волокна целлюлозы. Пакетики очень плотно набиты содержимым, что обеспечивает плавный и длительный никотиновый удар. В банке **±25 порций**.<br>
**Крепость 50 мг**, крайне не рекомендуется новичкам.
<div class="popup-gallery d-flex mb-3">
	<a href="/img/products/dzen/dzen-mint-portion.jpg" title="Снюс Dzen белые порции"><img class="img-fluid" src="/img/products/dzen/dzen-mint-portion.jpg" alt="Снюс Dzen мята"></a>
</div>
Есть и другие вкусы:
<table class="table table-sm">
	<caption>Таблица вкусов и крепости {{page.filter-brand-list}}</caption>
	<thead>
		<tr>
			<th scope="col">img</th>
			<th scope="col">Название</th>
			<th scope="col">mg</th>
			<th scope="col">грн</th>
			<th scope="col"></th>
		</tr>
	</thead>
	<tbody>
		<!-- сразу вывводим то что в наличии product.has_availability == true START-->
		{% assign sorted_items = site.products | sort: "position-brand" | where: "brand", "Dzen" %}
		{% for product in sorted_items %}

		{% if product.has_availability == true %}
		{% include item-product-table.html %}
		{% endif %}

		{% endfor %}
		<!-- сразу вывводим то что в наличии product.has_availability == true END-->

		<!--  вывводим то чего нет в наличии product.has_availability == false Start-->

		<!--  вывводим то чего нет в наличии product.has_availability == false END-->
	</tbody>

</table>