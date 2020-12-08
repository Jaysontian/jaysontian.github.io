---
layout: category
permalink: categories/life/
title: Life
description: I have no life, hence no articles.
---

# Articles
<hr style='margin-bottom:30px'>
{% for post in site.categories.life %}
<div onclick="window.location.href='{{ post.url }}'" class='articlelink'>
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%b %d, %Y" }}</p>
</div>
 
{% endfor %}
