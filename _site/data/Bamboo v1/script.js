


document.addEventListener('DOMContentLoaded', function() {
    var homenav = document.getElementById('homenav');
    var shopnav = document.getElementById('shopnav');
    var settingsnav = document.getElementById('settingsnav');
    // onClick's logic below:
    homenav.addEventListener('click', function() {
        clear();
        $('#home').css('display','block');
    });
    shopnav.addEventListener('click', function() {
        clear();
        $('#shop').css('display','block');
    });
    settingsnav.addEventListener('click', function() {
        clear();
        $('#settings').css('display','block');
    });
});

function clear(){
	$('#home').css('display','none');
	$('#shop').css('display','none');
	$('#settings').css('display','none');
}