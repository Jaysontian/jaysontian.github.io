
var Duck = {

	nbr: 0,
	rubber: 10,
	initprice: false,
	sold: 0,
	count:{
		ducksmith:0,
		rubberrefill:false,
		campaign:0,
	},

	price:{
		ducksell: 0.75,
		ducksmith:25,
		campaign: 53.26,
	},

	make: function(){
		if (Duck.rubber >= 1) {
			Duck.rubber -= 1;
			Duck.nbr ++;
		}
	},

	buy: function(){
		if (Duck.nbr > 0){
			Duck.nbr -= 1;
			Duck.sold++;
			money += Duck.price.ducksell;
		}
	},

	make_rubber: function(){
		if (money >= 0.1) {
		money -= 0.1;
		Duck.rubber ++;
	}
	},

	recruit: function(){
		$('#btnRecruitment').remove();
		money-=19.99;
		info('Project employment unlocked, quack.')
		$('#employment').css('display','block')
	},

	ducksmith: function(){
		if (money >= Duck.price.ducksmith){
			money -= Duck.price.ducksmith.toFixed(2);
			Duck.price.ducksmith *= 1.0993645801;
			$('#price-ducksmith').text(Duck.price.ducksmith.toFixed(2))
			Duck.count.ducksmith ++;
			$('#count-ducksmith').text(Duck.count.ducksmith)
			Duck.autoclick();
			info('Damn, quack, the traveller hires a ducksmith to do the dirty work.')
		}
	},

	autoclick: function(){
		setTimeout(function () {
	    	Duck.make();
	      Duck.autoclick();
	    }, 1000/Duck.count.ducksmith);
	},

	rubberdeliver: function(){
		$('#btnRubberDelivery').remove();
		info('Quack, the traveller unlocks rubber refill. Check the box to enable it.');
		$('<input>').attr({'type':'checkbox'}).appendTo('#production').change(function(){
			if (Duck.count.rubberrefill == false){
				Duck.count.rubberrefill = true; 
				info('Rubber refill enabled.');
			}
			else{
				Duck.count.rubberrefill =false;
				info('The traveller disables rubber refill. Quack.')
			}
		});
		$('<a>').text('Rubber Refill').appendTo('#production');
	},

	advertise: function(){
		$('#btnAdvertising').remove();
		money -= 59.99;
		ad = prompt('Write a message to advertise:')
		info('The traveller put an ad on youtube. It says: '+ad+'. It\'s a terrible ad, but public demand increases by 40%.');
		speed *= 0.75;

	},

	adsdepartment: function(){
		$('#btnAdsDepartment').remove();
		money -= 100;
		info('The travaller now has an ad department for the shop. Quack. That\'s dope.');
		$('#advertisement').css('display','block');
	},

	campaign: function(){
		if (Duck.price.campaign <= money){
			money -= Duck.price.campaign;
			Duck.count.campaign ++; $('#count-campaign').text(Duck.count.campaign);
			Duck.price.campaign *= 1.5;
			$('#price-campaign').text(Duck.price.campaign.toFixed(2));
			speed*=0.83;
		}
	},

	entertown: function(){
		$('#btnTheTown').remove();
		info('The traveller decides to leave the shop. The town is peaceful. A light breeze blows.');
		$('#eye').text('⤺');
		$('#towntab').css('display','block');
		$('<p>').text('HP: 36').appendTo('#stats').attr('id','health');
	}

}