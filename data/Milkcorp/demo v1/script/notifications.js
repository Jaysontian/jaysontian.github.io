
// Notification Stuff

function notify(title, text){
    $('#notify-title').text(title);
    $('#notify-text').text(text);
    $('#notify').css('display','block');
    $('#notify-modal').css('top','50px');
}

function closenotify(){
    $('#notify').css('display','none');
    $('#notify-modal').css('top','-400px');
}

var current;
var x = 0;

function story(array){
    current = array;
    storystart();
}

function storystart(){
    $('#story-text').text(current[x]);
    $('#storymodal').css('display','block');
}

function storynext(){
    if (x < current.length - 1){
        x += 1;
        storystart()
    }
    else{
        storyclose();
    }
}

function storyclose(){
    $('#storymodal').css('display','none');
    story
    x = 0;
}