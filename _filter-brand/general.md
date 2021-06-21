---
title: Swedish Match
permalink: swedish-match
title-seo: "Снюс от Swedish Match\U0001F1F8\U0001F1EA | General Snus"
descr: Купить снюс от шведского производителя Swedish Match в Украине. Genearal, Ettan,
  Göteborgs Rapé, G.3, XRANGE, G.4 и другие бренды.
keywords: снюс, general, Swedish Match
filter-name-h2: Swedish Match
filter-brand-list: Swedish Match
layout: filter-brand
---

Swedish Match🇸🇪 в Украине🇺🇦.
Вам может понравится бренд [Swedish Match](/swedish-match) (Genearal, Ettan, Göteborgs Rapé, G.3, XRANGE, G.4 и другие).
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