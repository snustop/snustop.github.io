---
title: Arqa
date: 2020-09-10 12:58:00 Z
permalink: "/arqa"
title-seo: Arqa Снюс| Купить снюс арка в Украине
descr: Снюс Arqa. Арка — российский бренд безтабачной смеси. Крепость до 75 мг никотина.
  Более 20-ти вкусов.
keywords: снюс, арка, arqa
filter-name-h2: Arqa Снюс
filter-brand-list: Arqa
link-amp-page: <link rel="amphtml" href="https://snustop.com.ua/amp/arqa">
layout: filter-brand
---

<b>Снюс Arqa</b> — российский бренд безтабачной смеси. Крепость до 70 мг</b> с различными вкусами.

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
		{% assign sorted_items = site.products | sort: "position-brand" | where: "brand", page.filter-brand-list %}
		{% for product in sorted_items %}

		{% if product.has_availability == false %}
		{% include item-product-table.html %}
		{% endif %}

		{% endfor %}
		<!--  вывводим то чего нет в наличии product.has_availability == false END-->
	</tbody>

</table>

Насчет крепости, пишут 70 мг, но на деле некоторые продукты ощущаются слабее. Например: арка со вкусом энергетика очень сильно жжет губу, соответственно никотиновый удар очень быстрый и сильный, а вот арка панеттон и мармелад практически не пекут и нет такого сильного жжения, но и эффект от них слабее, хоть и заявлено 70 мг никотина, как и в Arqa Energy. В банке <b>20 порций</b>.

Многие жалуются, что после использования появляется одышка, повышенное сердцебиение, тошнота (рвота), головокружение (конечно это все защитная реакция организма). Некоторые из продуктов сильно разъедают губу и десну. Наш интернет-магазин snustop.com.ua крайне не рекомендует данный продукт!<br>
На банках пишут срок изготовления **декабрь 2019 год**. Производят его в **2021**, но со старыми датами. Это связано с запретом в РФ данной продукции.