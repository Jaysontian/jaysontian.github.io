---
layout: page
title: Notions
permalink: /notions/
---
<h1 id='title' style="margin-top:110px"><span>Notions</span> is my blog.</h1>

Containing my thoughts, experiements, weird ideas, things I want to do... really just a brain dump (the name's pretty self explanatory).

<div class='flex' style='justify-content:left;'>
    <button class='btn2 marginleft'>Life</button>
    <button class='btn2 marginleft'>Biology</button>
    <button class='btn2 marginleft'>Code</button>
    <button class='btn2 marginleft'>Other</button>
</div>
<div class='flex' style='justify-content:left; margin-top:25px;'>
    <button class='btn2 marginleft'>Milk Tea Reviews</button>
    <button class='btn2 marginleft'>Documentries</button>
</div>


<br>

# All Articles
<hr style='margin-bottom:30px'>
{% for post in site.posts %}
<div onclick="window.location.href='{{ post.url }}'" class='articlelink'>
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%b %d, %Y" }}</p>
</div>
 
{% endfor %}


<br>







<!--
<div class='category-con'>
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    
    <a href='/categories/{{category_name}}'>{{ category_name | capitalize}}</a>

{% endfor %}

<a>All Posts</a>
</div>-->