var Project = {

	s1 : {
		0:{
			name: 'Recruitment',
			des: 'Start hiring people to speed up manufacturing. (-$20)',
			click: 'Duck.recruit()',
			unlock: 'money',
			unit: 20,
		},
		1:{
			name: 'RubberDelivery',
			des:'Automatically buys rubber when not enough. (Need 3 Ducksmiths)',
			click: 'Duck.rubberdeliver()',
			unlock: 'Duck.count.ducksmith',
			unit: 3,
		},
		2:{
			name: 'Advertising',
			des:'Advertise your duck shop! This will increase demand by 40%. (-$60) ',
			click:'Duck.advertise()',
			unlock: 'money',
			unit: 59.99,
		},
		3:{
			name: 'AdsDepartment',
			des:'Hire ad makers to increase sale demand. (-$100)',
			click:'Duck.adsdepartment()',
			unlock:'money',
			unit: 100,
		},
		4:{
			name:'TheTown',
			des:'Once the traveller has made 300 ducks, he decides to leave his shop.',
			click:'Duck.entertown()',
			unlock: 'Duck.sold',
			unit:300,
		}
	},

	init: function(){
		for (i=0; i< 5; i++) {
			cont = $('<button>').appendTo('#projects').attr({'disabled':true,'onclick':Project.s1[i].click,'id':'btn'+Project.s1[i].name});
			$('<h3>').appendTo(cont).text(Project.s1[i].name);
			$('<p>').appendTo(cont).text(Project.s1[i].des);
		}
	},

	enable: function(){
		for (i=0; i<5; i++) {
			if (Project.s1[i].unit <= eval(Project.s1[i].unlock)){
				$('#btn'+Project.s1[i].name).attr('disabled',false)
			}
		}
	},




}