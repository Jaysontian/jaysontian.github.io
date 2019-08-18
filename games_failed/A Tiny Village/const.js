


setInterval(function(){ 
	if (Start.collectors > 0) {
		Start.twigs += Start.collectors * Start.collectors * 5; $('#twigs').text('twigs: '+ Start.twigs)}
	}, 500);

// event hunger
var s1 = 0;
setInterval(function(){ 
	if (Start.twigs > 100 && s1 == 0) {
		s1 = 1; Start.hunger();
	}
}, 500);



//event campsite
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;



setInterval(function(){ 
	if (Start.shelter > 5 && s2 == 0) {
		s2 = 1; N.notify('The field is now a campsite consisting of 5 shelters.')
	}
	if (Start.hungerval == 50 && s4 == 0) { s4 = 1;
		N.notify('People are now dying rapidly due to starvation.')
	}
	if (Start.hungerval == 25 && s5 == 0) { s5 = 1;
		Event.show_confirm('Alert','Buy a medical kit or hunters immediately.','Event.endEvent()','Confirm')
	}
}, 1000);


setInterval(function(){
	if (Start.hungerval <= 50 && Start.hungerval > 25) {
		Start.population -= 1; Start.update('population','population: '+ Start.population)}
}, 500)

setInterval(function(){
		if (Start.hungerval <= 25 && Start.hungerval > 10) {
		Start.population -= 1; Start.update('population','population: '+ Start.population)}
}, 200)

setInterval(function(){
	if (Start.hungerval <= 10 && Start.hungerval > 0) {
		Start.population -=1; Start.update('population','population: '+ Start.population)}
	if (Start.population <= 0) {
		Start.population = 1; 
		if (s3 == 0) {
			s3 = 1; Event.show_confirm('Game Over','All of the villagers, including you, have died.','location.reload()','Play Again')}}
	if (Start.hungerval <= 0){Start.hungerval = 1}

}, 100)

