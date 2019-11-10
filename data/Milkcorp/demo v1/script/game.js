var Game = {

	auto: function() {
		window.setInterval(function(){
		    Game.milk(jobs[0].rate);
		    Game.coins(jobs[1].rate);
		    Game.research(jobs[2].rate);
		}, 1000);
		window.setInterval(function(){

			// checking for unlocks
		    if (unlocks.coins){
		    	if (!tutorial[0].completed){
		    		story(intro);
		    		tutorial[0].completed = true;
		    	}
		    	$('#coins-div').css('display','block');
		    	actions[1].visible = true;
		    }

		    if (unlocks.jobs){
		    	if (!tutorial[1].completed){
		    		tutorial[1].completed = true;
		    		story(storyjobs);
		    	}
		    	$('.jobs').css('display','block');
		    	$('#farmers-div').css('display','block');
		    	jobs[0].visible = true;
		    }

		    if (unlocks.vendors){
		    	if (!tutorial[2].completed){
		    		story(storyvendors);
		    		tutorial[2].completed = true;
		    	}
		    	$('#vendors-div').css('display','block');
		    	jobs[1].visible = true;
		    }

		    if (unlocks.scientists){
		    	if (!tutorial[3].completed){
		    		story(storyscientists);
		    		tutorial[3].completed = true;
		    	}
		    	$('#scientists-div').css('display','block');
		    	$('#research-div').css('display','block');
		    	jobs[2].visible = true;
		    }

		    if (unlocks.research){
		    	if (!tutorial[4].completed){
		    		story(storyresearch);
		    		tutorial[4].completed = true;
		    	}
		    	$('.research').css('display','block');
		    }

		    if (unlocks.cowcount){
		    	$('#cowcount-div').css('display','block');
		    }

		    if (unlocks.capacity){
		    	$('#capacity-div').css('display','block');
		    	if (data.milk >= data.capacity){
		    		data.milk = data.capacity;
		    	}
		    }

		    //unlock coins
		    if (data.milk > 34){
		        unlocks.coins = true;
		    }
		    //unlock farmer
		    if (data.coins > 39){
		        unlocks.jobs = true;
		    }
		    //unlock vendor
		    if (jobs[0].count > 1){
		        unlocks.vendors = true;
		    }
			// unlock scientist
		    if (jobs[0].count > 2 && jobs[1].count > 2){
		        unlocks.scientists = true;
		    }
		    // unlock capacity
		    if (data.milk >= data.capacity && !unlocks.capacity){
		        unlocks.capacity = true;
		        notify('Too Much Milk','Your farm has reached maximum holding capacity for the produced milk. You can increase capacity through future research.')
		    }

		}, 200);
	},

	milk: function(number){
		data.milk +=  number * data.cowcount;
	},

	coins: function(number){
		if (data.milk >= number * data.cowcount){
			data.coins += number * data.milkcost * data.cowcount;
			data.milk -= number * data.cowcount;
		}
	},

	farmer: function(){
		if (jobs[0].count == 0){
			jobs[0].rate = 0.89;
		}
		if (data.coins >= jobs[0].cost){
			jobs[0].count++;
			data.coins-= jobs[0].cost;
			jobs[0].cost = nextcost(jobs[0].cost, 1.08, jobs[0].count);
			jobs[0].rate = nextcost(jobs[0].rate, 1.07, jobs[0].count);
		}
	},

	vendor: function(){
		if (jobs[1].count == 0){
			jobs[1].rate = 0.67;
		}
		if (data.coins >= jobs[1].cost){
			jobs[1].count++;
			data.coins-= jobs[1].cost;
			jobs[1].cost = nextcost(jobs[1].cost, 1.07, jobs[1].count);
			jobs[1].rate = nextcost(jobs[1].rate, 1.09, jobs[1].count);
		}
	},

	scientist: function(){
		if (jobs[2].count == 0){
			jobs[2].rate = 0.4;
			unlocks.research = true;
		}
		if (data.coins >= jobs[2].cost){
			jobs[2].count++;
			data.coins -= jobs[2].cost;
			jobs[2].cost = nextcost(jobs[2].cost, 1.09, jobs[2].count);
			jobs[2].rate = nextcost(jobs[2].rate, 1.08, jobs[2].count);
		}
	},

	research: function(number){
		data.research += number;
	},

	breeder: function(){
		if (data.coins >= jobs[3].cost){
			jobs[3].count++;
			data.coins -= jobs[3].cost;
			data.cowcount += 1;
			jobs[3].cost = nextcost(jobs[3].cost, 1.18, jobs[3].count);
		}
	},




// All Research Upgrades

	fancypackaging: function(){
		if (researchitem(0) == true){
			data.milkcost = Math.round(100*data.milkcost*1.1)/100;
		}
	},

	cowmotivation: function(){
		if (researchitem(1) == true){
			jobs[0].rate = Math.round(100*jobs[0].rate*1.05)/100;
		}
	},

	radioadvertising: function(){
		if (researchitem(2) == true){
			jobs[1].rate = Math.round(100*jobs[1].rate*1.1)/100;
		}
	},

	cosmetics: function(){
		if (researchitem(3) == true){
			data.milk += 2000;
		}
	},
	cowreligion: function(){
		if (researchitem(4) == true){
			data.coins += 100;
		}
	},
	freedelivery: function(){
		if (researchitem(5) == true){
			data.coins += 2000;
		}
	},
	unlockbreeder: function(){
		if (researchitem(6) == true){
			notify('Bankruptcy','Your mom gives you $400 dollars because you are bankrupt.');
			jobs[3].visible = true;
		}
	},
	constructsheds: function(){
		if (researchitem(7) == true){
			unlocks.capacity = true;
			data.capacity *= 2;
		}
	},

/// All event happenings
	cowpun: function(){
		story(storycowpun);
		data.coins += 100;
	},

	cowdeath: function(){
		story(storycowdeath);
		data.cowcount = 0;
		$('#cowcount-div').css('display','block');
		unlocks.cowcount = true;
	},
	demodone: function(){
		story(demodone);
	}


}