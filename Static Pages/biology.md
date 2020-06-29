---
layout: category
permalink: categories/biology/
title: Biology
description: Recording some cool experiments or stuff about bio. Did you know that 25% of your bones are in your feet?
---



{% for post in site.categories.biology %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}