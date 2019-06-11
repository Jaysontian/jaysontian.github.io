Project.init();


//******************* SAVING *********************

function save() {

  var save = {
    money1: money,
    rubber: Duck.rubber,
    nbr: Duck.nbr,
    demand1: demand,
    speed1: speed,
    sold: Duck.sold,
  }

  localStorage.setItem('save', JSON.stringify(save))
}

function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));

  if (savegame != null && save != undefined){

    money = savegame.money1;
    Duck.rubber = savegame.rubber;
    Duck.sold = savegame.sold;
  }
}

function townhall() {
  info('The traveller stepped into the mysterious house of quests.')
  scenechange(event, 'quest');
}

function talk(des){
    dlg = document.createElement('dialog');
    btn = document.createElement('button');


    btn.setAttribute('onclick','deletedialog()')
    document.body.appendChild(dlg);
    
    dlg.showModal();
    dlg.innerHTML=des;
    dlg.setAttribute('id','dia')
    btn.innerHTML = 'Next';
    dlg.appendChild(btn);
    dlg.open;

}

function deletedialog() {
  $('#dia').remove();
}







//******************* DUCK *************************

//make duck

var money = 2000;

var demand = 1000;
var speed = 1;



setInterval(function(){
	$('#rubber').text(Duck.rubber);
	$('#money').text(money.toFixed(2));
	$('#duck').text(Duck.nbr);
  $('#duckssold').text(Duck.sold);
  Project.enable();
	if (money > 150 && Duck.initprice == false) {
	}


  if (Duck.count.rubberrefill == true && Duck.rubber == 0){
    if (money >= 5) {
      money -= 5;
      Duck.rubber += 50;
    }
  }
  save();
},100)



var eyes = ['>','I','O','-','Q','$','~','∋','♥','☉','★','☊','⚆','⚌','⤺','*','.'];
function info(text){
  
  $('#text').text(text);
  $('#eye').text(eyes[parseInt(Math.random() * 16)])
}




function purchase() {
    setTimeout(function () {
    	Duck.buy();
      purchase();
    }, demand*speed);
};
purchase();



function scenechange(evt, scene){

	var i, page, tab;
  page = document.getElementsByClassName("page");
  	for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  tab = document.getElementsByClassName("tab");
  	for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" selected", "");
  }

	$('#' + scene).css('display','block');
 	evt.currentTarget.className += " selected";
}

//******************* PRICE ************************

var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  Duck.price.ducksell = parseFloat(this.value);

  demand = (parseFloat(this.value))*3200 - 1400;

  $('#demand').text(parseInt(-66*parseFloat(this.value) + 133));
}