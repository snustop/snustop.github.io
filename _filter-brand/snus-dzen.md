---
title: Dzen
permalink: snus-dzen
title-seo: Dzen снюс | Снюс дзен купить в Украине
descr: Снюс дзен - крепкий белый снюс. Крепость 50-100 мг. Вкусы лесная ягода, слабкая
  мята, дыня, пина колада.
keywords: снюс, dzen
filter-name-h2: Dzen снюс
filter-brand-list: Dzen
layout: filter-brand
---

Снюс Dzen - крепкий белый снюс. Везде 25 порций, крепость 50-100 мг.<br>Вкусы:
 <ul>
 	<li>- 🍃 приятная сладкая мята (белые пакеты)</li>
 	<li>- 🍹 Ананас с кокосом (пакеты бело-желтые)</li>
 	<li>- 🍇 Сочные ягоды (пакеты бело-малиновые)</li>
 	<li>- 🍈 Спелая дыня (пакеты бело-желтые)</li>
 </ul>

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
		{% assign sorted_items = site.products | sort: "position-brand" | where: "brand", page.filter-brand-list %}
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