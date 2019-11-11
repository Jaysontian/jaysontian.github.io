
//window scroll method

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#navbar").addClass("active");
    }
    else {
        $("#navbar").removeClass("active");
    }
	});

//firebase 


var firebaseConfig = {
    apiKey: "AIzaSyBpmB_S3_Af0dxjlQr5Vv7VcWcgnNtFM4k",
    authDomain: "jayson-tian.firebaseapp.com",
    databaseURL: "https://jayson-tian.firebaseio.com",
    projectId: "jayson-tian",
    storageBucket: "jayson-tian.appspot.com",
    messagingSenderId: "248992686521",
    appId: "1:248992686521:web:b037d9f7b3c36f2f"
  };
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();
  const docRef = firestore.collection('Notebook');
  const projRef = firestore.collection('Projects');










/************************** Displaying STUFFFF **************************/


function clear(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	$("#home").css('display','none');
	$("#notebook").css('display','none');
	$("#article-container").css('display','none');
	$("#article-container").empty();
	$("#container").css('display','none');
	$("#project-page").css('display','none');
	$("#project-page").empty();
}

function display_home(){
	clear();
	$('#home').css('display','block');
}

function display_project(){
	clear();
	$('#container').css('display','block');
}

function display_home(){
	clear();
	$('#home').css('display','block');
}

function display_notebook(){
	clear();
	$('#notebook').css('display','block');
}

function display_article(docId){
	clear();
	$('#article-container').css('display','block');

	docRef.doc(docId).get().then(function(doc){
		if (doc.exists) {
	        console.log("Document data:", doc.data());
	        
	        let con = document.createElement('div');
	        let title1 = document.createElement('h1');
			let date1 = document.createElement('I');
			let body1 = document.createElement('div');
			let tag1 = document.createElement('p');

			title1.textContent = doc.data().title;
			body1.innerHTML = doc.data().body;
			date1.textContent = doc.data().date + " | Written by " + doc.data().author;
			tag1.textContent = doc.data().category;

			title1.setAttribute('class','article-title');
			date1.setAttribute('class','article-date');
			tag1.setAttribute('class','article-tag');
			body1.setAttribute('class','article-body');


			con.appendChild(title1);
			con.appendChild(date1);
			con.appendChild(body1);

			$('#article-container').append(con);

	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}


function display_project_page(docId){
	clear();
	$('#project-page').css('display','block');

	projRef.doc(docId).get().then(function(doc){
		if (doc.exists) {
	        console.log("Document data:", doc.data());        
	        let con1 = document.createElement('div');
			let body2 = document.createElement('div');
			body2.innerHTML = doc.data().body;
			body2.setAttribute('class','project-body');
			con1.appendChild(body2);

			$('#project-page').append(con1);

	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}






/************************** FILTER **************************/


/** the ALL filter class name is 'ARTICLE'
The INDIVIDUAL filter class name 'category' **/

var i;

function appendfilter(){
		docRef.onSnapshot(function(querySnapshot) {
			articles.textContent = '';
	    	querySnapshot.docs.forEach(function(doc) {
	    		if (doc.data().category != undefined && doc.data().category != ""){
	    			$('#sorting').append($('<option>', {
					    text: doc.data().category,
					    value: doc.data().category
					}));
	    		}
		    });

			    var a = new Array();
			    $("#sorting").children("option").each(function(x){
			        test = false;
			        b = a[x] = $(this).val();
			        for (i=0;i<a.length-1;i++){
			            if (b ==a[i]) test =true;
			        }
			        if (test) $(this).remove();
			    })
			});

		projRef.onSnapshot(function(querySnapshot) {
	    	querySnapshot.docs.forEach(function(doc) {
	    		if (doc.data().category != undefined && doc.data().category != ""){
	    			$('#projectfilter').append($('<option>', {
					    text: doc.data().category,
					    value: doc.data().category
					}));
	    		}
		    });

			    var a = new Array();
			    $("#projectfilter").children("option").each(function(x){
			        test = false;
			        b = a[x] = $(this).val();
			        for (i=0;i<a.length-1;i++){
			            if (b ==a[i]) test =true;
			        }
			        if (test) $(this).remove();
			    })
			});


}


appendfilter();


$('#sorting').on('change', function() {
  updatearticles(this.value);
});

$('#projectfilter').on('change', function() {
  updateprojects(this.value);
});


function updatearticles(attr){
	var articles = document.getElementById('articles').children;
	var j;
	for (j=0; j < articles.length; j++){
		if (articles[j].getAttribute('tag') != attr){
			articles[j].style.display = 'none';
		}
		if (articles[j].getAttribute('tag') == attr){
			articles[j].style.display = 'block';
		}
		if (attr == 'All'){
			articles[j].style.display = 'block';
		}
	}
};

function updateprojects(attr){
	var projects = $('.project').siblings();
	var m;
	for (m=0; m < projects.length; m++){
		if (projects[m].getAttribute('tag') != attr){
			projects[m].style.display = 'none';
		}
		if (projects[m].getAttribute('tag') == attr){
			projects[m].style.display = 'flex';
		}
		if (attr == 'All'){
			projects[m].style.display = 'flex';
		}
	}
};













/************************* DISPLAYING LIST **************************/

const articles = document.querySelector('#articles');


function render(doc){

	let div = document.createElement('div');
	let flex = document.createElement('div');

	flex.setAttribute('class','title-date')
	div.setAttribute("class", "article");

	let title = document.createElement('h3');
	let date = document.createElement('I');

	div.setAttribute('article', doc.id);
	div.setAttribute('tag', doc.data().category);

	div.setAttribute('onclick', 'display_article(\''+ doc.id+'\')');

	title.textContent = doc.data().title;
	date.textContent = doc.data().date;

	flex.appendChild(title);
	flex.appendChild(date);

	div.appendChild(flex);

	articles.appendChild(div);
}


function render_project(doc){

	let div3 = document.createElement('div');
	div3.setAttribute("class", "project");

	let title3 = document.createElement('h4');
	let description3 = document.createElement('p');
	let btn3 = document.createElement('button');

	div3.setAttribute('project', doc.id);
	div3.setAttribute('tag', doc.data().category);
	btn3.setAttribute('class', 'btn3');

	btn3.setAttribute('onclick', 'display_project_page(\''+ doc.id+'\')');

	title3.textContent = doc.data().title;
	description3.textContent = doc.data().description;
	btn3.textContent = 'View'

	div3.appendChild(title3);
	div3.appendChild(description3);
	div3.appendChild(btn3);

	$('.projects').append(div3);
}


function update(){

	docRef.onSnapshot(function(querySnapshot) {
		articles.textContent = '';

    	querySnapshot.docs.forEach(function(doc) {
        	render(doc);
	    });
	});

	projRef.onSnapshot(function(querySnapshot) {
		$('.projects').empty();

    	querySnapshot.docs.forEach(function(doc) {
        	render_project(doc);
	    });
	});


}

update();




















/***************************** FACTS *****************************/


facts = [
	'in 2007, an American man named Corey Taylor tried to fake his own death in order to get out of his cell phone contract without paying a fee. It didn\'t work.',
	'in 1567, the man said to have the longest beard in the world died after he tripped over his beard running away from a fire.',
	'in 2008 scientists discovered a new species of bacteria that lives in hairspray.',
	'animals can be allergic to humans.',
	'most of your brain is fat.',
	'oranges are not a natural fruit. Also, the OG bananas had gigantic seeds in them.',
	'Queen Elizabeth is a trained car mechanic.',
	'hot water freezes faster than cold water.',
	'dolphins have names for each other.',
	'hullaballoo is a legit english word - it means an altercation / dispute.',
	'sea otters hold hands as they sleep',
	'toilets flush in the note E flat.',
	'about fourty thousand people are injured by toilets every year.',
	'ketchup was once sold as medicine.',
	'no piece of square paper can be folded more than 7 times in half.',
	'Minnie Mouses\' name is a nickname. Her official name is Minerva.',
	'Burger King apparently gives out marinara sauce packets. I dont know why that\'s so amusing to me.',
	'the worlds oldest tortoise is twice the age of Queen Elizabeth.',
	'your hearing is affected by the amount of food you eat.',
	'crocs swallow rocks to help them dive deeper',
	];

i = 0;

function newfact(){
	
	document.getElementById('fact').innerHTML = "\"Apparently, " + facts[i] + "\"";
	i++;
	if(i == facts.length ) {
		i=0
	}}
