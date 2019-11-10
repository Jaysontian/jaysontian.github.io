var data = {
	milk: 0,
   milkcost: 1,
   coins: 0,
   research: 0,
   sellmilkamount: 1,
   diamonds: 0,
}

var unlocks = {
   coins: false,
   vendors: false,
   jobs: false,
   research: false,
   science: false,
   scientists: false,
}


var actions = [
{
   "name": "Make Milk",
   "onclick": "milk(1)",
   "details":"Use your amazing moo powers to make some milk!",
   "visible":true,
},
{
   "name": "Sell Milk",
   "onclick": "Game.coins(1)",
   "details":"Sell your milk in turn for gold!",
   "visible":false,
},
]



var jobs = [
{
   "name": "Farmer",
   "onclick": "Game.farmer()",
   "details":"Milks automatically. More farmers mean a higher production rate.",
   "visible":false,
   "need":"coins",
   "cost":20,
   'rate': 0.6,
   'count': 1,
},
{
   "name": "Vendor",
   "onclick": "Game.vendor()",
   "details":"Sells milk and earns money automatically.",
   "visible":false,
   "need":"coins",
   "cost":35,
   'rate': 0.3,
   'count': 0,
},
{
   "name": "Scientist",
   "onclick": "Game.scientist()",
   "details":"More scientists allow for more research opportunities - the power of science! ",
   "visible":false,
   "need":"coins",
   "cost":120,
   'rate': 0,
   'count': 0,
},
]

var research = [
{
   "name": "Antibiotics",
   "details":"Increase milk price and revenue by 50%",
   "research": 10,
   "cost": 100,
   "onclick":'Game.antibiotics()',
   "visible":true, 
   "completed":false,
},
{
   "name": "Glass Bottles",
   "details":"Increases milk quality allowing for 70% higher customer demand.",
   "research": 20,
   "cost": 20,
   "onclick":'Game.glassbottles()',
   "visible":false, 
   "completed":false,
},
{
   "name": "Exporting Milk",
   "details":"A new career in the manufacturing industry.",
   "research": 50,
   "cost": 200,
   "onclick":'Game.exportingmilk()',
   "visible":false, 
   "completed":false,
},
]