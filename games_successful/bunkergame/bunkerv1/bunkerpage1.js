var i = 0;
var i2 = 0;
var txt = 'It is the end of the world. Billions of people have died.';
var txt2 = 'Luckily, you found a gigantic underground bunker. 1000 people joined you there.\nYou are now the leader. Build a society safe from the hell outside.'
var speed = 50;

document.getElementById("nextbutton").style.visibility = "hidden";

function begin() {
	document.getElementById("blabla").style.display = "none";
	document.getElementById("nextbutton").style.visibility = "visible";
	document.getElementById("text1").innerHTML += txt.charAt(i);
	i++
	setTimeout(begin, speed);
  }

function next() {
	document.getElementById("nextbutton").style.display = "none";
	document.getElementById("text1").style.display = "none";
	document.getElementById("text2").style.display = "block";
	document.getElementById("text2").innerHTML += txt2.charAt(i2);
	i2++
	setTimeout(next, speed);
	document.getElementById("next2button").style.display = "block";
}







