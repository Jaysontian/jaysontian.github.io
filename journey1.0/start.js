

var Start = {

textn: 0,
names: [],
rivalname:[],
pokedexcount: 0,


init: function() {

	Notifications.init(); // prepare notifications
	
	Start.s0text(); // start the story


	$('div#btn-trigger').remove(); //remove start trigger button

	// creating next button
	$('<div>').attr({'id': "btn-start", 'class':'button','onclick':'Start.s0text()'}).appendTo('div#main'); $('div#btn-start').text('Next');

},

s0text: function(){

	/*if (Start.textn==8){
		window.name = prompt('Name:', );
		if (name==''){Start.s0text()}
		else {Start.textn += 1;Start.s0text(); Start.names.push(name);}
	}

	if (Start.textn==12){
		var name2 = prompt('Rival Name:', );
		if (name2==''){Start.s0text()}
		else {Notifications.notify('My grandsons name is ' + name2 + '!'); Start.textn += 1;Start.s0text(); Start.rivalname.push(name2);};
	}*/


	Notifications.notify(Text.intro[Start.textn]); Start.textn += 1;	
	if (Start.textn >=17){
		Start.introfinish();
		//alert('Journey v1.0 \n \n NOTE: under no circumstance may this game be copied. Enjoy! ');
	};
},

introfinish: function(){ 

	$('div#btn-start').remove();

	 // creating wakeup button
	$('<div>').attr({'id': "btn-s1", 'class':'button','onclick':'Start.s1text()'}).appendTo('div#main');$('div#btn-s1').text('Wake Up');

	$('div#loc-main').text('Suicure Town');  // change loc to Suicure Town
	$('<div>').attr('id',"loc-sub").appendTo('div#header');$('div#loc-sub').text('Home');

	Start.textn = 0;


},

s1text: function(){
	if (Start.textn==0){$('div.button').text('Next');
		$('<div>').attr('id', "sidePanel").addClass('sidePanel').appendTo('div#right'); // creates the right sidepanel
		$('<div>').attr('id', 'sideItems').prependTo('div#sidePanel'); // creating right sidepanel container
		$('<div>').attr({'id': 'trainer', 'class':'button', 'onclick':'Start.trainerselect()',}).prependTo('div#sideItems').text('Trainer');}
	if (Start.textn==21){ $('<div>').attr({'id': 'bag', 'class':'button', 'onclick':'Start.bagselect()',}).prependTo('div#sideItems').text('Bag');}
	if (Start.textn==23){ $('<div>').attr({'id': 'loc', 'class':'button', 'onclick':'Start.locselect()',}).prependTo('div#sideItems').text('Location');
				(Event.btn1).push('Lab');Event.btn1f.push("Location.lab()");}

	Notifications.notify(Text.s1[Start.textn]); Start.textn += 1;	

},

trainerselect: function(){
	alert('Player: ' + Start.names +'\nPokedex: ' + Start.pokedexcount)
},

locselect: function(){
	Start.textn = 0;
	Event.show('Location','Choose a place to go to');
},
labtext: function() {
	if (Start.textn == 0){$('div#btnlab').text('Next');}
	if (Start.textn == 10) {



		$('div#btnlab').remove();
		$('<div>').attr({'id': 'chose', 'class':'button','onclick':'Start.confirm()'}).appendTo('div#main').text('Submit');


		var selectList = "<select id='starter'>";
		    selectList += "<option value='Dilloom'> Dilloom </option>";
		    selectList += "<option value='Dynamouse'> Dynamouse </option>";
		    selectList += "<option value='Chilleo'> Chilleo </option>";
		
		$('#main').append(selectList);

		$('<div>').attr('id', "pokeholder").appendTo('div#main');

		$('<div>').attr('id', "grass").addClass('imgcon').appendTo('div#pokeholder');
		$('div#grass').prepend("<img id='dilloom' src='img/pokemon/001.png' />");
		$('img#dilloom').hover(function(){Notifications.notify("Dilloom, the spore pokemon. It is a grass and fairy type.")});

		$('<div>').attr('id', "fire").addClass('imgcon').appendTo('div#pokeholder');
		$('div#fire').prepend("<img id='dynamouse' src='img/pokemon/004.jpg' />");
		$('img#dynamouse').hover(function(){Notifications.notify("Dynamouse, the fuse pokemon. It is a fire and dark type.")});
		$('<div>').attr('id', "water").addClass('imgcon').appendTo('div#pokeholder');
		$('div#water').prepend("<img id='chilleo' src='img/pokemon/007.png' />");
		$('img#chilleo').hover(function(){Notifications.notify("Chilleo, the fresh snow pokemon. It is a water and ice type.")});
	}

	Notifications.notify(Text.lab[Start.textn]); Start.textn += 1;

},

confirm: function() {
	var starter = $('#starter').children("option:selected").val();
	var r = confirm('Are you sure? You chose ' + starter + ".");
	if (r == true) {
  		Start.chosen(starter);
	} else {
  		Start.labtext();}
},

chosen: function(starter){
	$('div#pokeholder').remove();
	$('#starter').remove();
	$('<div>').attr({'id': 'pokemon', 'class':'button', 'onclick':'Start.pokemonselect()',}).prependTo('div#sideItems').text('Pokemon')

	Notifications.notify("You chose " + starter + "!"); 
	(Event.pokemon).push(starter);

	$('div#chose').remove();
	$('<div>').attr({'id': 'btn-s2', 'class':'button','onclick':'Start.lab2text()'}).appendTo('div#main').text('Next');

},

pokemonselect() {
	Event.show('Pokemon');

}
	

}
