---
layout: page
permalink: categories/Food/
title: Food Reviews
description: Some things are just more important than others in life.
---


{% for post in site.categories.food %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}