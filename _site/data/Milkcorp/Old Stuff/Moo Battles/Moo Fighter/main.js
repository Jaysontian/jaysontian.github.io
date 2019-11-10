
//Startup

window.onload = (event) => {
    nextlevel(data.levelcount);
    newtroop(troop.index);
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover",html:true }); 
    generatecow();
    
};

function generatecow(){
    var i;
    for (i=0;i<troops.length;i++){
        var li = $('<li>').attr({'class':'list-group-item invisible '+'cowlist'+i}).appendTo('#cow-list');
        var row = $('<div>').attr('class','row').appendTo(li);
        $('<img>').attr({'class':'item','src':'images/'+i+'.png'}).appendTo(row);
        var col = $('<div>').attr('class','col-9').text(troops[i].name).appendTo(row);
        $('<button>').attr({'class':'btn btn-success btn-sm float-right', 'id':i+'cost', 'onclick':'upgradecow('+i+')'}).text('$ '+troops[i].cost).appendTo(col);
        var level = $('<span>').attr({'class':'badge badge-primary badge-pill'}).text('Lv. ').appendTo(col);
        $('<span>').attr('id','cow'+i).text(troops[i].level).appendTo(level);
        $('<button>').attr({'class':'btn btn-secondary btn-sm float-right','data-toggle':'popover','data-content':troops[i].info}).text('Info').appendTo(col);     
    }
}

function  updateshop(){
    var i;
    for (i=0;i<troops.length;i++){
        if (data.level >= troops[i].unlock){
            $('.cowlist'+i).removeClass('invisible');
        }
    }
}


//runtime

function nextlevel(num){
    data.level = num;
    data.emaxhp = enemies[num].hp;
    data.ehp = data.emaxhp;
    data.ename = enemies[num].name;
    data.zone = enemies[num].zone;
    $('#enemyimage').attr('src','images/enemy/'+num+'.png');
}

function newtroop(num){
    troop.hp = troops[num].hp;
    troop.maxhp = troops[num].hp;
    troop.attack = troops[num].attack;
    troop.speed = troops[num].speed;
}

function attack(number){
    if (data.ehp <= 1){
        data.coins += enemies[data.levelcount].coins;
        data.levelcount++;
        nextlevel(data.levelcount);
    }
    data.ehp -= number;
};

function upgradecow(i){
    data.coins -= troops[i].cost;
    troops[i].cost = Math.round(troops[i].cost*2.3);
    troops[i].level ++;
    $('#cow'+i).text(troops[i].level);
    $('#'+i+'cost').text('$ '+troops[i].cost);
}


window.setInterval(function(){
    if (troop.hp >= 1){
        troop.hp -= enemies[data.levelcount].attack;
    }
}, 1000)



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


window.setInterval(function(){
    updateshop();
    //Enemy
    $(".enemyhp").text(data.ehp + " HP");
    $("#level").text(data.level);
    $("#maxup").text(data.emaxhp);
    $('#eattack').text(enemies[data.levelcount].attack);
    $("#name").text(data.ename);
    $("#zone").text(data.zone);
    $(".enemyhp").attr({'aria-valuenow':data.ehp,'aria-valuemax':data.emaxhp }).css('width', data.ehp/data.emaxhp*100+'%');
   
    //Troops
    $('.troophp').text(troop.hp + ' HP')
    $("#tattack").text(troop.attack);
    $("#tspeed").text(troop.speed);
    $(".troophp").attr({'aria-valuenow':troop.hp,'aria-valuemax':troop.maxhp }).css('width', troop.hp/troop.maxhp*100+'%');

    //status
    $('#coins').text(data.coins);
    $('[data-toggle="popover"]').popover();
    
}, 100);




