  


// EDITOR 


var oDoc, sDefTxt;

function showtools(){
	$("#tools").fadeToggle();
}

$(document).keypress(function(event){

  	if (event.which == 26){
  		$("#tools").fadeToggle();
  	}

});

$(document).mouseup(function(e)
{
    var container = $("#tools");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.fadeOut();
    }
});


document.execCommand('enableObjectResizing');


function insertimage() {
	var sLnk=prompt('Source:');
	if(sLnk&&sLnk!=''&&sLnk!='http://'){
		formatDoc('insertImage',sLnk)};
}

function initDoc() {
  oDoc = document.getElementById("body");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}






















// FIRESTORE

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

  
var username = $('#username');
var password = $('#password');
var btnlogin = $('#login-btn');


$("#login-btn").on("click", function(){ 
	const email = username.val();
	const pass = password.val();
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});


firebase.auth().onAuthStateChanged(function(user) {
	var btnlogin = $('#display-login');
	var btnlogout = $('#logout')

  if (user) {
  	btnlogin.css('display','none');
  	btnlogout.css('display','block');
    alert('Successfully signed in.'); 
    realtime();
    $('#id01').css('display','none');
  } else {
  	newarticle();
  	btnlogin.css('display','block');
  	btnlogout.css('display','none');
    alert('Logged out. Please sign in to publish and access articles.');
  }
});

function logout(){
	firebase.auth().signOut().then(function() {

	}).catch(function(error) {
	  // An error happened.
	});
}



  var firestore = firebase.firestore();
  var docRef = firestore.collection($('#select-collection').val());

$('#select-collection').change(function(){
	docRef = firestore.collection($('#select-collection').val());
	newarticle();
	if ($('#select-collection').val() == 'Notebook'){
		$('#description').css('display','none');
	};
	if ($('#select-collection').val() == 'Projects'){
		$('#description').css('display','block');
	};
})  


function hi(){

	if ($('#title').val() == '' || $('#title').val() == undefined) {
		alert("There is not title!");
		return;
	}

	//Recording Date (Timestamp)
	var monthNames = [ "January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December" ];
	var dateObj = new Date();
	newdate = monthNames[dateObj.getUTCMonth()] + '  ' + dateObj.getUTCDate() + ', ' + dateObj.getUTCFullYear();

	//Adding to firestore

  	docRef.doc($('#title').val()).set({
    title: $('#title').val(),
    body: document.getElementById('body').innerHTML,
    author: "Jayson Tian",
    timestamp: Date.now(),
    category: $('#tag').val(),
    description: $('#description').val(),
    date: newdate
	})

	.then(function(docRef) {
	    console.log("Published sucessfully!");
	    newarticle();
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
}







const articles = document.querySelector('#articles');

function render(doc){

	let div = document.createElement('div');
	div.setAttribute("class", "article");

	let title = document.createElement('h3');
	let date = document.createElement('I');

	div.setAttribute('article', doc.id);
	div.setAttribute('onclick', 'showarticle(\''+ doc.id+'\')');

	title.textContent = doc.data().title;
	date.textContent = doc.data().date;

	div.appendChild(title);
	div.appendChild(date);



	articles.appendChild(div);

}

function load(){
	articles.textContent = '';

	docRef.get().then(function(querySnapshot) {
    	querySnapshot.docs.forEach(function(doc) {
        	render(doc);
    });
});}


function realtime(){
	articles.textContent = '';

	docRef.onSnapshot(function(querySnapshot) {
		articles.textContent = '';
    	querySnapshot.docs.forEach(function(doc) {
        	render(doc);
    });
});}









const page = document.querySelector('#page');

function showarticle(docId){
	docRef.doc(docId).get().then(function(doc){
		if (doc.exists) {
	        console.log("Document data:", doc.data());

	        var titleedit = document.getElementById('title');
	        var bodyedit = document.getElementById('body');
	        var tagedit = document.getElementById('tag');
	        var descedit = document.getElementById('description');


			titleedit.value = doc.data().title;
			bodyedit.innerHTML = doc.data().body;
			tagedit.value = doc.data().category;
			descedit.value = doc.data().description;

	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}


function newarticle(){
	$('#title').val('');
	$('#body').text('');
	$('#tag').val('');
	$('#description').val('');
	load();
}


function deletearticle(){

	var docId = $('#title').val();

	var r = confirm("Article will be deleted forever. Are you sure?");
			if (r == true) {
			  docRef.doc(docId).delete().then(function() {			
				newarticle();
		    	console.log("Document successfully deleted!");
		}).catch(function(error) {
		    alert('There was an error. Check logs for more info.')
		});
		}
		else {
			  return;
			}
	} 

var open = -1;

function toggleNav(){
	if (open == -1){
		document.getElementById("articles").style.marginLeft = "0px";
  		document.getElementById("padding").style.paddingLeft = "250px";
  		open *= -1;
  		return;
	}
	if (open == 1){
		document.getElementById("articles").style.marginLeft = "-250px";
  		document.getElementById("padding").style.paddingLeft = "0px";
  		open *= -1;
  		return;
	}
}



	
