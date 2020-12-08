---
layout: page
title: Blog
permalink: /blog/
---

<div class='flex' style='margin-top:-40px;'>
<div>
    <h1 id='title' style="margin-top:110px"><span>Thoughts</span> and Tea</h1>
    <p style='margin-bottom:45px;'>Organizing ideas, experiements, weird ideas, things I want to do...  just a braindump of things in my life.</p>
    <div class='flex' style='justify-content:left;'>
        <button class='btn2 marginleft' onclick="window.location.href='/categories/life'">Life</button>
        <button class='btn2 marginleft' onclick="window.location.href='/categories/biology'">Biology</button>
        <button class='btn2 marginleft' onclick="window.location.href='/categories/coding'">Code</button>
    </div>
    <div class='flex' style='justify-content:left; margin-top:25px;'>
        <button class='btn2 marginleft' onclick="window.location.href='/specials/milk-tea/'">Milk Tea Reviews</button>
        <button class='btn2 marginleft'>Documentries</button>
    </div>
</div>

<img src='/assets/tea.png' style='width:300px;height:300px; margin-top:50px;'>

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