---
layout: page
permalink: categories/blog/
title: Blogs
description: Articles and random braindumps about life and death.
---


{% for post in site.categories.blog %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}