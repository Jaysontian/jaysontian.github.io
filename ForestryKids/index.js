document.getElementById('topbar').onmouseover = function(){
	document.getElementById("mySidenav").style.height = "250px";
	document.getElementById("mySidenav").style.opacity = "1";

};

document.getElementById('mySidenav').onmouseover = function(){
	document.getElementById("mySidenav").style.height = "250px";
	document.getElementById("mySidenav").style.opacity = "1";
};

document.getElementById('topbar').onmouseleave = function(){
 	document.getElementById("mySidenav").style.height = "0px";
	document.getElementById("mySidenav").style.opacity = "0";

};

document.getElementById('mySidenav').onmouseleave = function(){
 	document.getElementById("mySidenav").style.height = "0px";
  	document.getElementById("mySidenav").style.opacity = "0";

};




document.getElementById('about').onmouseover = function(){
	document.getElementById("tip-about").style.display = "block";
}
document.getElementById('about').onmouseleave = function(){
	document.getElementById("tip-about").style.display = "none";

}
document.getElementById('about').onclick = function(){
	document.getElementById("tip-about").style.display = "none";

}
document.getElementById('un').onmouseover = function(){
	document.getElementById("tip-un").style.display = "block";
}
document.getElementById('un').onmouseleave = function(){document.getElementById("tip-un").style.display = "none";}
document.getElementById('un').onclick = function(){document.getElementById("tip-un").style.display = "none";}


var help = document.getElementById('help');
var help_note = document.getElementById("tip-help");

help.onmouseover = function(){help_note.style.display = "block"};
help.onmouseleave = function(){help_note.style.display = "none"};
help.onclick = function(){help_note.style.display = "none";};
