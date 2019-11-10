var Location = {


	lab: function() { // When the player enters the lab 

		Event.endEvent();

		$('div#btn-s1').remove(); // recreating the next button
		$('<div>').attr({'id': 'btnlab', 'class':'button', 'onclick':'Start.labtext()',}).appendTo('div#main').text('Enter');
		$('div#loc-sub').text('Pokemon Lab'); // make loc text pokelab
		Event.btn1 = ['Cancel']; Event.btn1f = ['Event.endEvent()'];

		Start.textn=0;


	}
}