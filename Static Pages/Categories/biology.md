---
layout: category
permalink: categories/biology/
title: Biology
description: Recording some cool experiments and trends in bio "culture". Aha.
---

# Articles
<hr style='margin-bottom:30px'>
{% for post in site.categories.biology %}
<div onclick="window.location.href='{{ post.url }}'" class='articlelink'>
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%b %d, %Y" }}</p>
</div>
 
{% endfor %}


<style>
    #title span{
        background-color:#3f9627;
    }
    nav {
        border-color:#3f9627;
    }
    hr {
        background-color:#3f9627;
        border-color:#3f9627;
    }
    .articlelink:hover{
        color:#3f9627;
    }
</style>