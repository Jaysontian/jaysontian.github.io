function home() {window.location.href="index.html"}
function code() {window.location.href="code.html"}
function backtocode() {window.location.href="../code.html"}
function backtohome() {window.location.href="index.html"}
function music() {window.location.href="music.html"}
function hosa() {window.location.href="notes/hosa.html"}

function admin() {
	var pswrd = prompt("Password:", "")

	if (pswrd == '828ny74r') {
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

window.onload = setTimeout(loadFrame, 4000);
