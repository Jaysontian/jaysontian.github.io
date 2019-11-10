

var A = {

	time: [1,0],
	trig: [0,0,0,0,0,0],
	user: '',
	coins: 0,

	alert: 0,

	start: function(){
		N.init();
		A.menu();
		conststart();

		A.user = prompt('What\'s your name?','John');
		if (A.user == null || A.user == '') {A.user='John'}
		N.notify('Different statuses will affect the survival and death rate of your population.');
	N.notify('The goal of the game is to survive as long as you can.');
		N.notify('This is ' + A.user + '\'s bunker.');
		

		$('<div>').attr({'id': 'info'}).appendTo('#wrapper');
		$('<div>').attr({'id': 'user'}).appendTo('#info').text(A.user + '\'s Bunker'); 
		$('<div>').attr({'id': 'time'}).appendTo('#info').text('Day 1 Hour 0');
		$('<div>').attr({'id': 'pop'}).appendTo('#info').text('Population: '+ pop);

		A.add('right','sidePanel','sidePanel');
		A.add('sidePanel','materials');
		A.add('materials','coinval','','$ 0');
		A.add('sidePanel','status','','');
		A.add('status','health','','Health: 100%');
		A.add('status','hunger','','Hunger: 100%');

		Items.init();

		$('#action').css('display','block');

	},

	init: function(){
		if (A.trig[0] == 0) {$('#btn-trigger').remove(); 
		A.addbtn('main','coins','A.click()','Generate','+ $1','coin-tip'); 
		A.addbtn();
		A.trig[0] = 1; A.start()}
	},


	click: function(){
		A.coins += Math.round(clickamount); A.updatecoins();
	},



	acc1: function(){var panel = document.getElementById('panel1');
    if (panel.style.display === "flex") {
      panel.style.display = "none";} else {
      panel.style.display = "flex";}
	},


	acc2: function(){var panel2 = document.getElementById('panel2');
    if (panel2.style.display === "block") {
      panel2.style.display = "none";} else {
      panel2.style.display = "block";}
	},

	acc3: function(){var panel3 = document.getElementById('panel3');
    if (panel3.style.display === "block") {
      panel3.style.display = "none";} else {
      panel3.style.display = "block";}
	},


	add: function(append, addId, addClass, text){
	$('<div>').attr('id', addId).addClass(addClass).appendTo('div#'+append).text(text);
	},

	addbtn: function(append, addId, onclick, text, hover, hoverId) {
		$('<div>').attr({'id': addId, 'class':'button','onclick':onclick}).appendTo('div#'+append).text(text);
		if (hover != null){
			$('<div>').attr({'class': 'tooltip', 'id': hoverId}).appendTo('div#'+addId).text(hover);
			$('#'+addId).hover(function(){$('#'+hoverId).css("display", "block");}, function(){$('#'+hoverId).css("display", "none");})
		}
	},
	update: function(Id, Text) {
	$('#'+Id).text(Text)
	},

	updatecoins: function(){$('#coinval').text('$ ' + A.coins); if (A.alert == 0) {A.alert += 1; N.notify('You earned some money from clicking.')} if (A.alert == 60) {A.alert = 0}},

	cheat: function() {
		Event.show_confirm('Someone\'s Wallet','You find a wallet that has like 20 credit cards inside. Remember, it is immoral to take things that aren\'t yours.', 'Event.endEvent()','Steal It')
		A.coins += 1000000; A.updatecoins();
	},

	menu: function(options) {
		var menu = $('<div>').attr('class', 'menu').appendTo('body');

				$('<span>')
					.addClass('appStore menuBtn')
					.text('Menu')
					.appendTo(menu)
					.attr('onclick','');
				$('<span>')
					.addClass('appStore menuBtn')
					.text('Settings')
					.appendTo(menu)
					.attr('onclick','');
				$('<span>')
					.addClass('appStore menuBtn')
					.text('Help')
					.appendTo(menu)
					.attr('onclick','');
				$('<span>')
					.addClass('appStore menuBtn')
					.text('Cheat')
					.appendTo(menu)
					.attr('onclick',"A.cheat()");
	},
	cooldown: function(btn, Id, time) {

		coolbtn = $("#" + btn);

		coolbtn.addClass('disabled').attr('onclick','');


		$('<div>').attr({'class':'bar', 'id': Id}).appendTo('#'+btn);
		$('#'+Id).width(120 +"px").animate({width: '0%'}, time * 1000, 'linear', function() {
					$('#'+Id).remove();
					coolbtn.removeAttr('class','disabled');
					coolbtn.addClass('button');
				});
	},
}