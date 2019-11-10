

window.onload = function(){
	clickhome()
};


function clear(){
	document.getElementById('home').style.display = 'none';
	document.getElementById('randomfacts').style.display = 'none';
	document.getElementById('blog').style.display = 'none';
	document.getElementById('mywork').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
}

function clickhome() {
	clear();
	document.getElementById('home').style.display = 'block';
}

function clickcontact() {
	clear();
	document.getElementById('contact').style.display = 'block';
}

function clickmywork() {
	clear();
	document.getElementById('mywork').style.display = 'block';
}

function clickblog(){
	clear();
	document.getElementById('blog').style.display = 'block';
}

function clickfacts(){
	clear();
	document.getElementById('randomfacts').style.display = 'block';
}

facts = [
	'In 2007, an American man named Corey Taylor tried to fake his own death in order to get out of his cell phone contract without paying a fee. It didn\'t work.',
	'In 1567, the man said to have the longest beard in the world died after he tripped over his beard running away from a fire.',
	'In 2008 scientists discovered a new species of bacteria that lives in hairspray.',
	'Animals can be allergic to humans.',
	'Most of your brain is fat.',
	'Oranges are not a natural fruit. Also, the OG bananas had gigantic seeds in them.',
	'Queen Elizabeth is a trained car mechanic.',
	'Hot water freezes faster than cold water.',
	'Dolphins have names for each other.',
	'Hullaballoo is a legit english word - it means an altercation / dispute.',
	'Sea otters hold hands as they sleep',
	'Toilets flush in the note E flat.',
	'About fourty thousand people are injured by toilets every year.',
	'Ketchup was once sold as medicine.',
	'No piece of square paper can be folded more than 7 times in half.',
	'Minnie Mouses\' name is a nickname. Her official name is Minerva.',
	'Burger King apparently gives out marinara sauce packets. I dont know why that\'s so amusing to me.',
	'The worlds oldest tortoise is twice the age of Queen Elizabeth.',
	'Your hearing is affected by the amount of food you eat.',
	'Crocs swallow rocks to help them dive deeper',
	];

i = 0;

function newfact(){
	
	document.getElementById('fact').innerHTML = facts[i];
	i++;
	if(i == facts.length ) {
		i=0
	}
}

document.getElementById('search').addEventListener('keydown', function(event){
    if(event.keyCode == 13){
    	search();
    }
} );

function search(){
	if(document.getElementById('search').value == 'admin'){
		admin();
	}
}

function admin(){
	clear();

}