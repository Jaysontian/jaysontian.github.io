---
layout: post
title: All Categories
permalink: /categories/
---

<div class='category-con'>
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    
    <a href='/categories/{{category_name}}'>{{ category_name | capitalize}}</a>

{% endfor %}

<a>All Posts</a>
</div>