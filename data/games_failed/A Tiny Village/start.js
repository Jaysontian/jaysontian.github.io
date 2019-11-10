var Start = {

textn: 0,
twigs: 0,
shelter: 0,
collectors: 0,
collectors_c: 5,
hunters:0,
hunters_c: 100,
pass: [0,0,0,0,0],

population:100,
hungerval: 100,

meat: 0,

a1: 0,


intro: ['It\'s the end of the world',
'You and some other people escaped to a safe haven',
'You find youselves in a large grassy field with a forest neaby',
'A light breeze makes the the long grass sway back and forth',
'Clouds float across the blue sky',
'A gust of wind blows twigs and leaves into the sky from a nearby forest'],


init: function() {
	N.init(); // prepare notifications
	Start.start(); // start the story
	Start.menu();
	$('#btn-trigger').remove(); //remove start trigger button
	Start.addbtn('main','btn-start','Start.start()','Next')
},

start: function(){



	if (Start.textn == 4){
		N.notify(Start.intro[5]);
		$('#btn-start').remove();
		Start.add('main','actions','','');
		Start.add('actions','','label','Actions');
		Start.add('main','hire','','');
		Start.addbtn('actions','btn-start','Start.icr_twigs()','Gather','Twigs +1','gather');


		Start.textn = 0;
	}
	else { 
		N.notify(Start.intro[Start.textn]); 	
		Start.textn += 1;}
},

icr_twigs: function(){
	if (Start.textn == 0) {
		N.notify('You gathered some twigs');
		Start.add('right','sidePanel','sidePanel');
		Start.add('sidePanel','materials');
		Start.add('materials','','eventTitle','Materials')
		Start.add('materials','twigs','','twigs: 0');
		Start.add('sidePanel','status','','');
		Start.add('status','','eventTitle','Status');
		Start.add('status','population','','population: 100');
	}
	Start.textn += 1;
	Start.twigs += 1; 
	$('div#twigs').text('twigs: ' + Start.twigs);
	if (Start.textn == 30) {
		Event.show_confirm('Nightfall','Its getting dark. Build a shelter.','Start.enable_shelter()','Ok');
	}
},

enable_shelter: function(){
	Event.endEvent();
	Start.add('main','build','','');
	Start.add('build','','label','Build');
	Start.addbtn('build','btn-shelter','Start.icr_shelter()','Shelter', 'Twigs -30', 'shelterin')
},

icr_shelter: function(){
	if (Start.pass[0] == 0) {
		Start.pass[0] += 1; Start.shelter += 1;	Start.twigs -= 30;
		$('<div>').attr({'id': 'shelter'}).appendTo('div#materials').text('shelters: ' + Start.shelter); Start.update_twigs();
		N.notify('You built a small shelter with the twigs you\'ve gathered');
		Event.show_confirm('Collectors','A group of kind workers showed up saying they are willing to help you collect twigs. 5 shelters are needed for living accomodations.','Start.enable_collectors()','Ok');
	}
	else {
		if (Start.twigs >= 30) {
			Start.shelter += 1; Start.twigs -= 30; Start.update_shelters(); Start.update_twigs();
			N.notify('You built a small shelter with the twigs you\'ve gathered')
		}
		else {N.notify('You do not have enough twigs')}
	}

},

enable_collectors: function() {
	Event.endEvent();
	Start.add('hire','','label','Hire');
	Start.addbtn('hire','btn-collectors','Start.icr_collectors()','Collector','Shelter -'+Start.collectors_c, 'collector-tip')
},

icr_collectors: function() {
		if (Start.shelter >= Start.collectors_c) {
			Start.collectors += 1; Start.shelter -= Start.collectors_c;
			if (Start.collectors == 1) {$('<div>').attr({'id': 'collectors'}).appendTo('div#materials')};
			Start.collectors_c = Start.collectors_c * 2;
			$('#collectors').text('collectors: ' + Start.collectors); $('div#shelter').text('shelters: ' + Start.shelter);
			$('#collector-tip').text('Shelter -'+ Start.collectors_c);
			N.notify('A group of collectors are now helping you gather twigs. Shelters are filling up, make more.');
		}
		else {N.notify('You do not have enough shelters')}

},



//hunger episode
hunger: function() {
	Event.show_confirm('Hungry Villagers','Villagers are becoming sick due to lack of nutrition. Gather some hunters to go hunt for food.','Start.enable_hunt()','Confirm');
	N.notify('Villagers are dying from hunger.');
},

enable_hunt: function() {
	Event.endEvent();
	Start.addbtn('actions','btn-hunt','Start.icr_hunt()','Hunt','Twigs -'+ Start.hunters_c, 'hunters-tip')
	Start.add('status','hunger','','hunger: 100');
	Start.dcr_hunger();
},

icr_hunt: function() {
	if (Start.twigs >= Start.hunters_c) {
		Start.meat += 5; Start.twigs -= Start.hunters_c; Start.hunters_c *= 1.5;
		if (Start.a1 == 0) {
			Start.a1 = 1;
			Start.add('materials','meat','','meat: 0');
		}
		Start.update('meat','meat: '+Start.meat); 
		Start.update_twigs();

		$('#hunters-tip').text('Twigs -'+ Start.hunters_c);
		N.notify('The hunters are hunting for meat.');

	}
	else {N.notify('You do not have enough twigs')}
},

dcr_hunger: function() {
	setInterval(function(){ 
	Start.hungerval -= 1; Start.update('hunger','hunger: '+ Start.hungerval);
	if (Start.hungerval == 0) {Start.hungerval = 0}
}, 500);
},

feed: function() {
		if (Start.meat >= 5) {
		Start.meat -= 5;
		Start.update('meat','meat: '+ Start.meat)
		N.notify('Your people are now fed.');

		if (Start.hungerval + 50 >= 100) {Start.hungerval = 100}
		else{
		Start.hungerval +=50;}

		}
	else {N.notify('You do not have enough meat')}
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

update_twigs: function() {
	$('#twigs').text('twigs: ' + Start.twigs)
},

update_shelters: function() {
	$('#shelter').text('shelters: ' + Start.shelter)
},

update: function(Id, Text) {
	$('#'+Id).text(Text)
},

cheat: function() {
	Start.twigs += 1000; Start.update_twigs();
},

menu: function(options) {
	var menu = $('<div>').attr('class', 'menu').appendTo('body');

			$('<span>')
				.addClass('appStore menuBtn')
				.text('cheat')
				.appendTo(menu)
				.attr('onclick','Start.cheat()');


},
cooldown: function(btn, Id, time) {

	coolbtn = $("#" + btn);

	coolbtn.addClass('disabled').attr('onclick','');


	$('<div>').attr({'class':'bar', 'id': Id}).appendTo('#btn-start');
	$('#'+Id).width(90 +"px").animate({width: '0%'}, time * 1000, 'linear', function() {
				$('#'+Id).remove();
				coolbtn.removeAttr('class','disabled');
				coolbtn.addClass('button');
			});
},
}
