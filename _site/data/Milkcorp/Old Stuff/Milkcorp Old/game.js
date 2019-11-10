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
		    	$('#coins-div').css('display','block');
		    	actions[1].visible = true;
		    }
		    if (unlocks.scientists){
		    	$('#scientists-div').css('display','block');
		    	$('#research-div').css('display','block');
		    	jobs[2].visible = true;
		    }
		    if (unlocks.vendors){
		    	$('#vendors-div').css('display','block');
		    	jobs[1].visible = true;
		    }
		    if (unlocks.research){
		    	$('.research').css('display','block');
		    }
		    if (unlocks.jobs){
		    	$('.jobs').css('display','block');
		    	$('#farmers-div').css('display','block');
		    	jobs[0].visible = true;
		    }


		    //unlock coins
		    if (data.milk > 19){
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
		    if (jobs[0].count > 3 && jobs[1].count > 2){
		        unlocks.scientists = true;
		    }

		}, 200);
	},

	milk: function(number){
		data.milk += number;
	},

	coins: function(number){
		if (data.milk >= number){
			data.coins += data.milkcost * number;
			data.milk -= number;
		}
	},

	farmer: function(){
		if (data.coins >= jobs[0].cost){
			jobs[0].count++;
			data.coins-= jobs[0].cost;
			jobs[0].cost = nextcost(jobs[0].cost, 1.08, jobs[0].count);
			jobs[0].rate = nextcost(jobs[0].rate, 1.07, jobs[0].count);
		}
	},

	vendor: function(){
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




// All Research Upgrades

	antibiotics: function(){
		if (researchitem(0) == true){
			data.milkcost = Math.round(100*data.milkcost*1.5)/100;
		}
	},

	glassbottles: function(){
		if (researchitem(1) == true){
			jobs[1].rate = Math.round(100*jobs[1].rate*1.7)/100;
		}
	}







}