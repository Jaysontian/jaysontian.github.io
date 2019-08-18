

var	health = 100; 	healthr = 1;
var hunger = 100;	hungerr = 1;
var pop = 1000;
var bugs = 50;

var clickamount = 1;


function conststart() {
	setInterval(function(){ 
		Items.check();
	}, 1);

	//clock
	setInterval(function(){

				if (A.time[1] < 23) {
				A.time[1] += 1; $('#time').text('Day '+A.time[0]+' Hour '+A.time[1])}
				else { A.time[1] = 0; A.time[0] += 1; $('#time').text('Day '+A.time[0]+' Hour '+A.time[1]); N.notify('It is day ' + A.time[0] +'.');}
			}, 1000);


	//health

	setInterval(function(){
		if (health <= 0) {
			health = 0; $('#health').text('Health: ' + health + '%');
		}
		else{
			health -= Math.floor((Math.random() * 3) + 1);; $('#health').text('Health: ' + health + '%');
		}
		
	}, 3000)


	//hunger

	setInterval(function(){
		if (hunger <= 0) {
			hunger = 0; $('#hunger').text('Hunger: ' + hunger + '%');
		}
		else{
			hunger -= Math.floor((Math.random() * 5) + 0);; $('#hunger').text('Hunger: ' + hunger + '%');
		}
	}, 1000)





	// Setting decrement values for all status
	setInterval(function(){
		if (health > 50) {healthr = 0}
		if (health <= 50 && health > 35) {healthr = 0.2}
		if (health <= 35 && health > 20) {healthr = 0.5}
		if (health <=20 && health > 5) {healthr = 1.5}
		if (health <= 5) {healthr = 5}

		if (hunger > 50) {hungerr = 0; alert3 = 0;}
		if (hunger <= 50 && hunger > 35) {hungerr = 0.2}
		if (hunger <= 35 && hunger > 20) {hungerr = 0.5}
		if (hunger <=20 && hunger > 5) {hungerr = 1}
		if (hunger <= 5) {hungerr = 1.5}
	}, 100)


	// MAIN: Population
	setInterval(function(){
		pop -= healthr + hungerr; 
		$('#pop').text('Population: '+ Math.round(pop))
	}, 100)


	//alerts for population
	alert = 0;
	alert1 = 0;
	alert2 = 0;
	alert3 = 0;
	alert4 = 0;
	setInterval(function(){
		if (alert1 == 0 && pop <= 500) {
			alert1 += 1; Event.show_confirm('Population Alert','Half of your initial population has died. Upgrade and fix status issues to decrease death rate.', 'Event.endEvent()','Ok')
	}
		if (alert2 == 0 && pop <= 100){
			alert2 += 1; Event.show_confirm('Population Danger','Most of your people have died. Upgrade and fix status issues to decrease death rate.', 'Event.endEvent()','Ok')
		}

		if (alert3 == 0 && hunger <= 50) {
			alert3 += 1; N.notify('The people are hungry. Buy something edible.')
		}

		if (pop < 1 && alert4 == 0) {
			alert4 +=1;
			Event.show_confirm('Game Over','All of your people have died. Click to start over.', 'location.reload()','Play Again')
		}
		if (pop < 1) {
			pop = 0; $('#pop').text('Population: '+ Math.round(pop));
		}
		}, 1)

	//population bar
	$('<div>').attr('id','myProgress').prependTo('#main');
	$('<div>').attr('id','myBar').prependTo('#myProgress');

	setInterval(function(){
		$('#myBar').css('width', pop/1000*100 + '%')
		if (pop <= 100) {$('#myBar').css('background-color', '#4CAF50')}
		if (pop <= 400) {$('#myBar').css('background-color', 'yellow')}
		if (pop <= 100) {$('#myBar').css('background-color', 'red')}
		}, 1)




	var eventBUG = 0;
	var eventCO = 0; 
	var eventAIDS = 0; 		
	var eventEARTHQUAKE = 0;
	var eventRADIATION = 0;
	var eventDEPRESSION = 0;
	var eventANDREWSHI = 0;

	//EVENTS
	setInterval(function(){
		if (A.time[0] == 2 && eventBUG == 0) {
			eventBUG += 1;
			Event.show_confirm('Bugs','Vast amounts of mosquitoes have started spreading disease, flying everywhere. Citizens will start dying due to this - buy some pesticide.','Event.endEvent()','Ok')
			$('<div>').attr('id','bugs').text('Bugs: 50').appendTo('#status');
			const_bugs();
		}
		if (A.time[0] == 7 && eventCO == 0) {
			eventCO += 1;
			Event.show_confirm('Carbon Monoxide Leak','Traces of carbon monoxide has been found in the air. Buy air purifiers before people suffocate.','Event.endEvent()','Ok')
			$('<div>').attr('id','co').text('Carbon Monoxide: 1%').appendTo('#status')
		}
	}, 100)

	function const_bugs(){
		setInterval(function(){
			bugs += Math.floor((Math.random() * 5) + 1);;
			$('#bugs').text('Bugs: ' + bugs)
		}, 2000)
	}



}

