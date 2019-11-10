var data = {
	mp: 50,
	coins: 100,
	diamonds: 10,
	level: 0,
	maxlevel: 3,
	tp: 0,
	maxtp: 15,
	hp: 20,
	maxhp: 20,
	cow: 0,
	food: 0,
	exitinbattle:false,
	generation: 1,
}

var battle = {
	level: 0,
	hp: 20,
	maxhp: 20,
	zone: "Grasslands",
	attack: 1,
}


var upgrades = [
{
   "name": "Ecstatic Powder",
   "details": "You attack power is boosted by 1%.",
   "price":30,
   "increment":1.08,
   "rank": 1,
   "unlock":3,
},
{
   "name": "Herbal Chocolate",
   "details": "Increases your max HP by 1.",
   "price":40,
   "increment":1.08,
   "rank": 1,
   "unlock":5,
},
{
   "name": "Big Malasada",
   "details": "Gives you extra seconds for 2 turns.",
   "price":75,
   "increment":1.08,
   "rank": 1,
   "unlock":2,
},
{
   "name": "Revival Herb",
   "details": "Gives you extra seconds for 2 turns.",
   "price":75,
   "increment":1.08,
   "rank": 1,
   "unlock":5,
},
{
   "name": "Power Herb",
   "details": "Gives you extra seconds for 2 turns.",
   "price":75,
   "increment":1.08,
   "rank": 1,
   "unlock":5,
},
{
   "name": "Magic Apples",
   "details": "Gives you extra seconds for 2 turns.",
   "price":75,
   "increment":1.08,
   "rank": 1,
   "unlock":5,
},
]

var food = [
{
   "name": "Steak",
   "details": "What if your cow's not really a vegan?! Feed your cow some steak!",
   "price":30,
   "value":20,
   "increment":1.08,
   "rank": 1,
},
{
   "name": "Berry Juice",
   "details": "Refreshing tropical delight. Get your cow some and it'll be happy for sure!",
   "price":30,
   "value":20,
   "increment":1.08,
   "rank": 1,
}
]

var enemy = [
   {
   "name": "Flowey",
   "hp": 5,
   "coins":20,
   "attack":1,
   "zone":"Grasslands",
   "time":10,
 },
 {
   "name": "Glooey",
   "hp": 10,
   "coins":25,
   "attack":1.5,
   "zone":"Grasslands",
   "time":5,
 },
 {
   "name": "Bigger Calf",
   "hp": 40,
   "coins":50,
   "attack":2,
   "zone":"Grasslands",
   "time":10,
 },
  {
   "name": "Grassy Calf",
   "hp": 100,
   "coins":50,
   "attack":3,
   "zone":"Grasslands",
   "time":10,
 },
 {
   "name": "Flowery Calf",
   "hp": "350",
   "zone":"Grasslands",
   "time":10,
 },
]
