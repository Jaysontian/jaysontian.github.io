


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    

    if(user != null){
      var name = user.displayName;
      var email_id = user.email;
      var email_verified = user.emailVerified;

      if (email_verified==true) {
        document.getElementById("verifybutton").style.display = "none"
      }
      if (user.displayName == null) {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("inputname_div").style.display = "block";
      
    }
      document.getElementById("placement").style.display = "block";
      document.getElementById("home").style.display = "block";
      document.getElementById("welcome").innerHTML = "Welcome Back, " + name;
      document.getElementById("dropdown").innerHTML = name;
      document.getElementById("user_para").innerHTML = "\nEmail : " + email_id + "\nVerified: " + email_verified;
      document.getElementById("user_div").style.display = "none";
    }

  } else {
    // No user is signed in.
    document.getElementById("verifybutton").style.display = "block"
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

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

function submitname(){
  var username = document.getElementById("inputname").value;
  var user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: username
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  document.getElementById("user_div").style.display = "block";
  document.getElementById("inputname_div").style.display = "none";
}


function sendverification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    window.alert("Verification Sent.")
  }).catch(function(error) {
    window.alert("An error occured. Please try again.")
});
}

function logout(){
  firebase.auth().signOut();
  document.getElementById("placement").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function profile(){
  document.getElementById("home").style.display = "none";
  document.getElementById("user_div").style.display = "block";

}
function home(){
  document.getElementById("home").style.display = "block";
  document.getElementById("user_div").style.display = "none";

}

