
var ex = 1;

function expand(){
	ex = ex * -1;
	if (ex == -1) {
		document.getElementById('proj-con').style.display = 'flex';
		document.getElementById('proj-con').style.opacity = '1';
	}
	if (ex == 1) {
		document.getElementById('proj-con').style.opacity = '0';
		document.getElementById('proj-con').style.display = 'none';
	}
	
}

function fadein(){
	document.body.style.opacity='1';
	document.getElementById('title').style.transform='translateY(0px)';
	document.getElementById('slide').style.transform='translateY(0px)';
	document.getElementById('masthead').style.transform='translateX(0px)';
	document.getElementById('tab-con').style.transform='translateX(0px)';
	document.getElementById('sidenav').style.transform='translateX(0px)';
}