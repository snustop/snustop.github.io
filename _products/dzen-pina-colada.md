---
title: dzen-pina-colada
date: 2020-10-01 20:31:00 Z
position: 17
title-seo: "Снюс Dzen Pina Colada \U0001F965\U0001F34D"
descr: "Снюс дзен со сочного ананаса \U0001F34D с кокосом \U0001F965. Крепость 50
  мг никотина, 25 порций. Порции slim - удобно сидят под губой. Никотиновый удар очень
  сильный."
product-name: "Dzen Pina Colada \U0001F965\U0001F34D"
product-alt: Снюс Dzen Pina Colada
strong: Очень крепкий
brand: Dzen
composition: Белый
price: 200
image: "/img/products/dzen/dzen-pina-colada.jpg"
availability-descr: В наличии
has_availability: true
gramm: 16
nicotine: 50
portions: 25
taste: "Напиток пина колада (ананаса \U0001F34D с кокосом \U0001F965)"
form: Порционный, slim
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

Снюс Dzen Pina Colada — бестабачная жевательная смесь, со напитока пина колада (ананаса 🍍 с кокосом 🥥).<br>
Порции длинные и тонкие (очень удобные), немного влажные, не содержат табака, вместо него используется волокна целлюлозы. Пакетики очень плотно набиты содержимым, что обеспечивает плавный и длительный никотиновый удар. В банке **±25 порций**. Цвет порций: **Желтый**<br>
**Крепость 50 мг**, крайне не рекомендуется новичкам.
<div class="popup-gallery d-flex mb-3">
	<a href="/img/products/dzen/dzen-pina-colada-portion.jpg" title="Dzen Pina Colada — желтые порции"><img class="img-fluid" src="/img/products/dzen/dzen-pina-colada-portion.jpg" alt="Снюс Dzen Пина Колада"></a>
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