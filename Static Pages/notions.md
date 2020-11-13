---
layout: page
title: Notions
permalink: /notions/
---
<br>
<h1 id='title'><span>Notions</span> is a blog by Jayson</h1>

It contains my thoughts, experiements, artwork, things I did, things I want to do... really just a jumble of ideas (the name's pretty self explanatory).

<p>You can also return to the <a href="/">main website</a>.</p>

{% for post in site.posts %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}










<!--
<div class='category-con'>
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    
    <a href='/categories/{{category_name}}'>{{ category_name | capitalize}}</a>

{% endfor %}

<a>All Posts</a>
</div>-->