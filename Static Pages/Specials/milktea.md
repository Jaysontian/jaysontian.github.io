---
layout: category
title: Tea-rrific Reviews 🧋
permalink: /specials/milk-tea/
description:
---
<!--
<div class='flex' style='justify-content:left;'>
    <button class='btn2 marginleft' onclick="window.location.href='/categories/life'">Life</button>
    <button class='btn2 marginleft' onclick="window.location.href='/categories/biology'">Biology</button>
    <button class='btn2 marginleft' onclick="window.location.href='/categories/coding'">Code</button>
</div>-->

<hr>

<div class='con-holder'>
    <img id='load' style='margin-left:34%;' src='https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'>
    <div id='clone' class='container' style='display:none;'>
        <br>
        <div class='flex'>
            <img class='pic' src='https://restaurants-static.skipthedishes.com/images/resized/item-7b5dd6b5603595063a2f.jpg' >
            <div class='info'>
                <h2 class='name'>Name</h2>
                <p>Stars: <span class='stars'>5/10</span></p>
                <p>Location: <span  class='location'>Coco Tea</span></p>
                <p  class='text'>A really good fruit tea to enjoy on a summer day. It's very sweet and also sour. This drink will sure throw lemons at your life.</p>
            </div>
        </div> <hr>
    </div>
</div>
<div style='height:300px;'></div>



<style>
    #title {
        width:100%;
        text-align:center;
    }
    .btn2 {
        background-color:white;
        border-color:#855d3e;
        color:#855d3e;
    }
    #title span{
        background-color:#855d3e;
        margin:auto;
    }
    #subtitle {

    }
    nav {
        border-color:#855d3e;
    }
    hr {
        background-color:#855d3e;
        border-color:#855d3e;
    }
    .articlelink:hover{
        color:#855d3e;
    }

    span {
        background-color:#855d3e;
        border-radius:5px;
        padding:0px 10px;
        color:white;
        font-weight:bold;
        margin:auto;
    }

    .container img {
        width:200px;
        height:200px;
        object-fit:cover;
        border-radius:10px;
    }
    .container h2 {
        margin-top:0px;
    }
    .container .info{
        width:70%;
    }
</style>


<script>
    let url = 'https://api.sheety.co/0da62c90c97120e1a5f12eec2c4d1e89/tearrificReviews/sheet1';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        (json.sheet1).forEach((tea)=>{
            console.log(tea.name)

            var teas = $('#clone').clone().appendTo('.con-holder');
            teas.find('.name').text(tea.name);
            teas.find('.stars').text(tea.stars+' / 10');
            teas.find('.location').text(tea.location);
            teas.find('.text').text(tea.review);
            teas.find('.pic').attr('src', tea.image);
            teas.show();

        });
        $('#load').remove()
    });
</script>
