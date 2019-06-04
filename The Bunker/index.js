
var slideIndex = 1;
showSlides(slideIndex);

setInterval(function(){plusSlides(slideIndex)}, 5000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > 2) {slideIndex = 1}    
  if (n < 1) {slideIndex = 2}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





function login(userEmail, userPass){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

$( "#btnuser" ).click(function() {
  $( "#dropmenu" ).slideToggle( "slidedown" );
});

window.onclick = function(event) {
    if (event.target != document.getElementById('dropmenu')&&event.target != document.getElementById('btnuser')) {
        $( "#dropmenu" ).css( "display",'none' );
    }
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){
      var name = user.displayName;
      var email_id = user.email;
      var email_verified = user.emailVerified;


      if (user.displayName == null) {
        nameinput = null;
        while (nameinput == null || !/^[a-zA-Z]*$/g.test(nameinput) ||nameinput == '' ) {nameinput = prompt('Please enter your name to complete sign up (it will be unchangeable):')}

        user.updateProfile({
          displayName: nameinput
        }).then(function() {
          document.getElementById("btnuser").innerHTML = user.displayName + '  &#9662';
        }).catch(function(error) {
          alert('An error occured. Jayson apologizes. Please try logging in again or try again later.')
        });
      }

      if (email_verified==false) {
          alert('Please verify your email in settings to access more features.')
          $('#verify').text('You\'re email is not verified.')
          $('#verifybtn').css('display','block');
      }

      if (email_verified==true){
          $('#verify').text('You\'re email has already been verified.')
          $('#verifybtn').css('display','none');
      }

      if (user.displayName != null) {
        
      }
      //what happens when signed in
      document.getElementById("btnlogin").style.display = 'none';
      $(".dropdown").css('display','block');
      document.getElementById("btnuser").innerHTML = name + '  &#9662';
      $('#id01').css('display','none');

    }

  } else {
    // No user is signed in.
    document.getElementById("btnlogin").style.display = 'block';
    $(".dropdown").css('display','none');
  }
});






function signup(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });


}




// *******************************************************.  SETTINGS.  *******************************************************.  
function oo(){
  alert('sorry FAM, but this page is currently under CONSTRUCTION. You will be temporarily redirected to the Demo of Bunker 2.' );
  window.open('bunkerv2/index.html');
}

function settings(){
  clear();
  $('#settings').css('display','block');
}

function app(){
  clear();
  $('#app').css('display','block');
}



// *******************************************************.  CHATTING.  *******************************************************.  

const db = firebase.database();

const status = document.getElementById('chatlog')



function showchat() {
  if (firebase.auth().currentUser.emailVerified == true) {
    
    clear();
    $('#chatbox').css('display','block');
    //refreshing log /

    const messages = db.ref('messages');
    
    messages.once('value').then(function(dataSnapshot){
      var data = dataSnapshot.val();
      var keys = Object.keys(data);
      keys.forEach(function(key){
        var temp = (JSON.stringify(data[key])).split('|');
        var tname = temp[0].slice(12, -1);
        var ttext = temp[1].slice(0,-2);
        status.innerHTML += tname + ': ' + ttext +'<br>';
    });
    
    
    //if enter key is pressed
    $('#chatinput').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            sendchat(document.getElementById('chatinput').value);
            document.getElementById('chatinput').value=' ';
        }
    });

  })}

  else {
    alert('You must verify your email first to access this feature.')
  }

}


//constantly refreshing the chat

setInterval(function(){    
    const messages = db.ref('messages');
    messages.once('value').then(function(dataSnapshot){
      var data = dataSnapshot.val();
      var keys = Object.keys(data);

      keys.forEach(function(key){

        var temp = (JSON.stringify(data[key])).split('|');
        var tname = temp[0].slice(12, -1);
        var ttext = temp[1].slice(0,-2);
        status.innerHTML += tname + ': ' + ttext +'<br>';
      })
    })
}, 700)

setInterval(function(){    
    status.innerHTML = ' ';
}, 7000)


//sending a chat to the database

function sendchat(text) {
  const messages = db.ref('messages');

  const id = (new Date).getTime();

  messages.child(id).set({'message': firebase.auth().currentUser.displayName + ' |' + text}).then(function(){
    status.innerHTML = '';
    const messages = db.ref('messages');
    messages.once('value').then(function(dataSnapshot){
      var data = dataSnapshot.val();
      var keys = Object.keys(data);

      keys.forEach(function(key){

        var temp = (JSON.stringify(data[key])).split('|');
        var tname = temp[0].slice(12, -1);
        var ttext = temp[1].slice(0,-2);
        status.innerHTML += tname + ': ' + ttext +'<br>';
      })
    })

  })
}



function sendverification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    window.alert("Verification Sent.")
  }).catch(function(error) {
    window.alert("An error occured. Please try again.")
});
}




function clear() {
  $('.slideshow-container').css('display','none');
  $('#flex1').css('display','none');
  $('#chatbox').css('display','none');
  $('#settings').css('display','none');
  $('#app').css('display','none');
}

function home(){
  clear();
  $('.slideshow-container').css('display','block');
  $('#flex1').css('display','flex');
}

function logout(){
  firebase.auth().signOut();
}