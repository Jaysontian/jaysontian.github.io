
window.onload = (event) => {
    show('#home');
    generate();
}

function generate(){
    var i;
    for (i=0;i<enemy.length;i++){
        var btn = $("<button>").attr({'onclick':'battlestart('+i+')', 'level':i, 'disabled':true}).text(i+1);
        $('<div>').attr('id','path').appendTo(btn);
        btn.appendTo('#level-con');
    }
    for (i=0;i<upgrades.length;i++){
        var div = $('<div>').addClass('item').appendTo('#Upgrades');
        $('<img>').attr('src','images/items/upgrades/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(upgrades[i].name).appendTo(col);
        p = $('<p>').text(upgrades[i].details).appendTo(col);
        $('<button>').text('$'+upgrades[i].price).appendTo(div);
        if (data.maxlevel < upgrades[i].unlock){
            div.attr('disabled', true);
            $('<p>').text("Unlock at level "+upgrades[i].unlock);
        }
    }
    for (i=0;i<food.length;i++){
        var div = $('<div>').addClass('item').appendTo('#Food');
        $('<img>').attr('src','images/items/food/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(food[i].name).appendTo(col);
        $('<p>').text(food[i].details).appendTo(col);
        $('<button>').text('$'+food[i].price).appendTo(div);
    }
}

function  unlocklevels(){
    var i;
    var children = $('#level-con').children();
    for (i=0; i < enemy.length; i++){
        if (battle.level == $(children[i]).attr('level')){
            $(children[i]).removeAttr('disabled');
        }
    }
}

function show(id){
    $('#home').css('display','none');
    $('#shop').css('display','none');
    $('#settings').css('display','none');
    $('#battlefield').css('display','none');
    $('#battle').css('display','none');
    $('#topbar').css('display','block');
    $('#navbar').css('display','flex');
    $(id).css('display','block');
}

window.setInterval(function(){
    $(".mp").text(data.mp);
    $(".pbar-mp").text(data.tp + " / " + data.maxtp);
    $("#coins").text(data.coins);
    $("#diamonds").text(data.diamonds);
    $('#level').text(data.level);
    $("#maxlevel").text(" / " + data.maxlevel);
    $(".pbar-hp").text(data.hp);
    $("#zone-bg").css('background-image',"url('images/scene/"+battle.zone+".jpg')");
    $(".pbar-mp").attr({'aria-valuenow':data.tp,'aria-valuemax':data.maxtp }).css('width', data.tp/data.maxtp*100+'%');
    $(".pbar-hp").attr({'aria-valuenow':data.hp,'aria-valuemax':data.maxhp }).css('width', data.hp/data.maxhp*100+'%');

    $("#time").text(battle.time);
    $(".enemyhp").attr({'aria-valuenow':battle.hp,'aria-valuemax':battle.maxhp }).css('width', battle.hp/battle.maxhp*100+'%');
    unlocklevels();
}, 100);

function notify(title, text){
    $('#notify-title').text(title);
    $('#notify-text').text(text);
    $('#notify').css('display','block');
}

function closenotify(){
    $('#notify').css('display','none');
}


function feed(){
    if (data.level >= data.maxlevel){
        notify("Ascension!", "You have reached the max level. It's time for Moo's final battle! Go battle!")
        return
    }
    if (data.maxtp -1 <= data.tp){
        data.level ++;
        data.tp = 0;
        data.maxtp = Math.floor(15*Math.pow(1.09,data.level));
    }
    else{
        data.mp ++;
        data.tp ++;
    }
}

function newgeneration(){
    data.generation += 1;
    data.level = 0;
    data.tp = 0;
    data.maxtp = 15;
    data.mp = 0;
    show('#home');
}

var timer;

function battlestart(e){
    data.hp = data.maxhp;
    battle.hp = enemy[e].hp;
    battle.time = enemy[e].time;
    battle.maxhp = enemy[e].hp;
    battle.enemyname = enemy[e].name;
    battle.zone = enemy[e].zone;
    battle.attack = enemy[e].attack;
    battle.coins = enemy[e].coins;

    $('#enemyimage').attr('src','images/enemy/'+e+'.png');
    $('#navbar').css('display','none');
    $('#topbar').css('display','none');
    $('#battle').css('display','none');

    $('#battlefield').css('display','block');

    $('#eattack').text(enemy[e].attack);
    $("#name").text(battle.enemyname);

    timer = setInterval(countdown, 1000);
}

var countdown = function(){
    if (battle.time <= 0 || data.hp <= 0){  
        clearInterval(timer);
        battlelost();
    } 
    else{
        battle.time -= 1;
        data.hp -= battle.attack;
    }
}

function enemyattack(){
    if (battle.hp <= 1){
        clearInterval(timer);
        battlewin();
    }
    battle.hp -= data.mp / 100;
}

function battlewin(){
    notify("You Won!", "Congratulations! You just defeated "+ battle.enemyname+"! You got "+battle.coins+" coins.");
    var children = $('#level-con').children();
    $(children[battle.level]).attr('disabled',true);
    battle.level++;
    data.coins += battle.coins;
    show("#battle");
}

function battlelost(){
    if (data.level >= data.maxlevel){
        notify("Retirement!", "It's time for Moo's retirement! The cute little thing raced towards the grasslands and mooed as loud as it could. Time for the next generation!")
        newgeneration();
    }
    else{
        var losecoin = Math.round(battle.coins * 0.3);
        notify("You Lost!", "UTTERly speechless... You were defeated by "+ battle.enemyname+" and it stole $" + losecoin + " from you. Better luck next time!");
        data.coins -= losecoin;
        show("#battle");
    }
}




function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}