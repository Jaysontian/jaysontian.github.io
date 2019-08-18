var Event = {

	btn1: [],
	btn1f: [],
	pokemon: [],
	level:['5'],
	pokemonf: [],

	show: function(title, description){
		eventPanel = $('<div>').attr('id', 'event').addClass('eventPanel').css('opacity', '0');
		$('<div>').addClass('eventTitle').text(title).appendTo(eventPanel);
		$('<div>').attr('id', 'description').text(description).appendTo(eventPanel);
		for (i = 0; i < Event.btn1.length; i++) {$('<div>').attr({'class': 'button', 'id': Event.btn1[i], 'onclick':Event.btn1f[i]}).text(Event.btn1[i]).appendTo(eventPanel);}
		
		$('div#wrapper').append(eventPanel);
		eventPanel.animate({opacity: 1}, 800, 'linear');},

	showpokemon: function(title) {
		eventPanel = $('<div>').attr('id', 'event').addClass('eventPanel').css('opacity', '0');
		$('<div>').addClass('eventTitle').text(title).appendTo(eventPanel);

		for (x = 0; x < Event.pokemon.length; x++) {$('<div>').attr({'class': 'imgcon', 'id': Event.pokemon[x]}).text(Event.pokemon[x] + " Lv. " + Event.level[x]).appendTo(eventPanel);}
		

		$('<div>').attr({'class': 'button', 'id': 'cancel', 'onclick':Event.endEvent}).text('Cancel').appendTo(eventPanel);
		
		$('div#wrapper').append(eventPanel);
		eventPanel.animate({opacity: 1}, 800, 'linear');

	},

	endEvent: function(){
		$('div#event').animate({opacity:0}, 800, 'linear', function() {
			$('div#event').remove();
			// Force refocus on the body. I hate you, IE.
			$('body').focus();
		});
	},

}


