var Items = {

	re: 0,

	s1: {
		0: {
			name: 'Canned Goods',
			id:'canned-btn',
			click: 'Items.f.canned(0)',
			cost: 20,
			button: null,
			tip: 'Food is quite scarce. A box of cans will cost $',
			tipid:'canned',
			msg: 'You bought a box full of cans containing assorted fruit. Hunger +25%',
			msg2: 'A few cans of expired soup and lentils were sold to you.',
			type: '1',
		},

		1: {
			name: 'Coin Machine',
			id: 'coin-btn',
			click: 'Items.f.coin()',
			cost: 50,
			button: null,
			tip: '20% more money per each click. A machines costs $',
			tipid: 'coin',
			msg: 'A shiny coin machine now helps you produce 20% more money. High demand, causing prices to skyrocket.',
			type: '1',
			amt: 0,
			amtid: 'coinmachinecount',
		},

		2: {
			name: 'Bandage',
			id: 'bandage-btn',
			click: 'Items.f.bandage()',
			cost: 50,
			button: null,
			tip: 'Heals a little of an injury. Supply costs $',
			tipid: 'bandagetip',
			msg: 'Some civilians were healed. The population is now safe from disease.',
			type: '1',
		},

		3: {
			name: 'Wood',
			id: 'wood-btn',
			click: 'Items.f.wood()',
			cost: 100,
			button: null,
			tip: 'A bundle of wood can be useful for a lot of things. Gathering will cost $',
			tipid: 'woodtip',
			msg: 'Bundles of wood are now usable to craft things. Lumberjacks say they need a rest though.',
			type: '1',
			amt: 0,
			amtid: 'woodcount',
		},

		6: {
			name: 'Water',
			id: 'water-btn',
			click: 'Items.na()',
			cost: 200,
			button: null,
			tip: 'Digging the mines for water. The whole operation costs $',
			tipid: 'watertip',
			msg: 'You bought a coin',
			type: '1',
		},

		5: {
			name: 'Air Purifier',
			id: 'air-btn',
			click: 'Items.na()',
			cost: 1000,
			button: null,
			tip: 'Refreshes the air and removes carbon monoxide or poison gas. It will cost $',
			tipid: 'airtip',
			msg: 'You bought a coin',
			type: '1',
		},

		4: {
			name: 'Pesticide',
			id: 'pest-btn',
			click: 'Items.pest()',
			cost: 10,
			button: null,
			tip: 'A can to kill off pests. It will take some time. Cost: $ ',
			tipid: 'pesttip',
			msg: 'Pesticide is being sprayed.',
			type: '1',
		},

		7: {
			name: 'Collector',
			id:'collector-btn',
			click: 'Items.na',
			cost: 200,
			button: null,
			tip: 'Food is quite scarce. A box of cans will cost $',
			tipid:'canned',
			msg: 'You bought a box full of cans containing assorted fruit. Hunger +25%',
			msg2: 'A few cans of expired soup and lentils were sold to you.',
			type: '2',
		},

		8: {
			name: 'Develop Treatment',
			id:'collector-btn',
			click: 'Items.na',
			cost: 200,
			button: null,
			tip: 'Food is quite scarce. A box of cans will cost $',
			tipid:'canned',
			msg: 'You have treated aids. Congrats.',
			msg2: 'A few cans of expired soup and lentils were sold to you.',
			type: '1',
		},

	},


	unlock: function(thing) {
		$('#'+Items.s1[thing].id).attr('onclick',Items.s1[thing].click);
		$('#'+Items.s1[thing].id).removeClass('disable').css('border','1px solid rgba(365, 365, 365, 1)');;
	},

	lock:function(thing) {
		$('#'+Items.s1[thing].id).attr('onclick', '');
		$('#'+Items.s1[thing].id).addClass('disable').css('border','1px solid rgba(365, 365, 365, 0.2)');;
	},

	init: function(){
		for (i=0; i<8; i++) {
			A.addbtn('panel' + Items.s1[i].type, Items.s1[i].id, '' ,Items.s1[i].name, Items.s1[i].tip + Items.s1[i].cost, Items.s1[i].tipid);
			$('#'+Items.s1[i].id).addClass('disable').css('border','1px solid rgba(365, 365, 365, 0.2)');
			$('#'+Items.s1[i].tipid).css({'color':'rgba(365,365,365,1)','background-color':'black'});
			if (Items.s1[i].amt != undefined) {
				$('<div>').attr('id', Items.s1[i].amtid).appendTo('#materials')
			}
		}
	},

	check: function(){
		for (i=0; i<8; i++) {
			if (Items.s1[i].cost <= A.coins){
				Items.unlock(i)}
			}

		for (i=0; i<8; i++) {
			if (Items.s1[i].cost > A.coins){
				Items.lock(i);
			};}
	},

	updatetip: function(obj) {
		$('#'+ Items.s1[obj].tipid).text(Items.s1[obj].tip + Items.s1[obj].cost);
	},

	updatecount: function(obj) {
		$('#'+ Items.s1[obj].amtid).text(Items.s1[obj].name + ': ' + Items.s1[obj].amt);
	},

	pay: function(obj) {A.coins -= Items.s1[obj].cost; A.updatecoins(); N.notify(Items.s1[obj].msg)},

	f: {
		canned: function(obj){
			Items.pay(obj); hunger += 25; 
			Items.s1[obj].cost = Math.round(Items.s1[obj].cost*1.3); 
			Items.updatetip(obj);
			if (hunger > 100) {hunger -= hunger - 100} $('#hunger').text('Hunger: ' + hunger + '%');},
		coin: function() {
			Items.pay(1); clickamount *= 1.5;
			Items.s1[1].cost = Math.round(Items.s1[1].cost*2.1); Items.updatetip(1);
			Items.s1[1].amt += 1;
			Items.updatecount(1);
		},
		bandage: function(){
			Items.pay(2); Items.s1[2].cost = Math.round(Items.s1[2].cost*1.3); Items.updatetip(2); health += 25;
			if (health > 100) {health -= health - 100} $('#health').text('Health: ' + health + '%')
		},
		wood: function() {
			Items.pay(3); Items.s1[3].cost = Math.round(Items.s1[3].cost*1.3); Items.updatetip(3); 
			Items.s1[3].amt += 5;
			Items.updatecount(3);
			A.cooldown('wood-btn','woodcooldown', 30)
		},
		pest: function() {
				A.cooldown('pest-btn','pestcooldown', 10);
				Items.pay(4);
				setInterval(10);
				bugs -= 50; $('#bugs').text('Bugs: ' + bugs);
				N.notify('Some mosquitoes were killed.')

		},



	},
	

	na:function(){N.notify('Sorry, this item is currently unavailable for purchase.')},

}