function home() {window.location.href="index.html"}
function code() {window.location.href="code.html"}
function backtocode() {window.location.href="../code.html"}
function backtohome() {window.location.href="index.html"}
function music() {window.location.href="music.html"}
function hosa() {window.location.href="notes/hosa.html"}
function notes() {window.location.href="notes.html"}
function oldpage() {
	window.location.href="oldpage/index.html"}
}

function echopage() {
	window.open("Echo/echo.html")}
}

function admin() {
	var pswrd = prompt("Password:", "")

	if (pswrd == '348761156') {
		window.location.href="081y2hjad.html"}
	else if(pswrd == '348761156'){
		window.location.href="081y2hjad.html"}
	else {
		alert("Password incorrect.")
	}
}


function loadFrame() {
    document.getElementById("body1").style.display = 'block';
    document.getElementById("load").style.display = 'none';
    document.getElementById("body1").className = 'fader';
};


var showmorenum = 1;
function showmore(){
	if (showmorenum == 1){
		$( "#moreitems" ).animate({opacity: 1,top: "+=1", height: "toggle"})
		showmorenum = showmorenum*-1} 
	else {
		$( "#moreitems" ).animate({opacity: 0,top: "-=1", height: "toggle"})
		showmorenum = showmorenum*-1
}}

function showsignin(){
	$( "#id01" ).fadeIn(1000)}
function showshare(){
	$( "#share" ).fadeIn(1000)}
function showwhatsnew(){
	$( "#whatsnew" ).fadeIn(1000)}



window.onload = setTimeout(loadFrame, 2000);
