

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



function clear(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	$("#home").css('display','none');
	$("#notebook").css('display','none');
	$("#article-container").css('display','none');
	$("#article-container").empty();
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
			date1.textContent = "On " + doc.data().date + " by " + doc.data().author;
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


/************************** FILTER **************************/


/** the ALL filter class name is 'ARTICLE'
The INDIVIDUAL filter class name 'category' **/

var array = new Set();
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


}





appendfilter();


$('#sorting').on('change', function() {
  updatearticles(this.value);
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
}





/************************* DISPLAYING TEXT **************************/

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


function update(){
	articles.textContent = '';

	docRef.onSnapshot(function(querySnapshot) {
		articles.textContent = '';
    	querySnapshot.docs.forEach(function(doc) {
        	render(doc);
    });
});}

update();