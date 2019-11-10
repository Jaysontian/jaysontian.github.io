// When the page loads

var gamestate = false;

$(document).ready(function() { loaddata(); });

var top = true;
function jumpcow(){
    if (top){
        $('#pic').css('bottom','50px')
        top = false
    }
    else{
        $('#pic').css('bottom','80px')
        top = true
    }
}

function startgame(){
    console.log("New Game");
    gamestate = true;
    story(welcome);
    showgame();
}   

function loaddata(){
    savedata = JSON.parse(window.localStorage.getItem("data"));
    saveactions = JSON.parse(window.localStorage.getItem("actions"));

    if (savedata !== null && saveactions !== null){
        gamestate = true;

        data = savedata;
        actions = saveactions;
        jobs = JSON.parse(window.localStorage.getItem("jobs"));
        research = JSON.parse(window.localStorage.getItem("research"));
        unlocks = JSON.parse(window.localStorage.getItem("unlocks"));
        events = JSON.parse(window.localStorage.getItem("events"));
        tutorial = JSON.parse(window.localStorage.getItem("tutorial"));

        var startDate = new Date(window.localStorage.getItem("unload"));
        var endDate =  new Date();
        var time = Math.round((endDate.getTime() - startDate.getTime()) / 1000 / 60 );
        
        notify('Saved Data', 'You saved data was loaded successfully! You were away for: ' + time + ' minutes.' );
        console.log("Saved data loaded sucessfully.")
        showgame();
    }
    else{
        $('#startscreen').css('display','flex');
    }
}

function showgame() {
    $('#startscreen').css('display','none');
    $('.Container-fluid').css('position','static');
    $('#feeder').css('display','block');
    $('#navbar').css('display','flex');
    $('#milk-div').css('display','block');
    $('#price-div').css('display','block');
    $('.actions').css('display','block');
    generate();
    Game.auto();
}

function generate(){
    var i;

    for (i=0;i<actions.length;i++){
        var div = $('<div>').appendTo('#Actions').attr({'class':'item','id':'actions'+i});
        $('<img>').attr('src','images/items/actions/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(actions[i].name).appendTo(col);
        p = $('<p>').text(actions[i].details).appendTo(col);
        $('<button>').text('Execute').appendTo(div).attr({'onclick':actions[i].onclick});
    }

    for (i=0;i<jobs.length;i++){
       var div = $('<div>').appendTo('#Jobs').attr({'class':'item','id':'jobs'+i});;
        $('<img>').attr('src','images/items/upgrades/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(jobs[i].name).appendTo(col);
        p = $('<p>').text(jobs[i].details).appendTo(col);
        $('<button>').text('$'+jobs[i].cost).appendTo(div).attr({'onclick':jobs[i].onclick, 'id':'costbtnjobs'+i});
    }

    for (i=0;i<research.length;i++){
        var div = $('<div>').appendTo('#Research').attr({'class':'item','id':'research'+i});;
        $('<img>').attr('src','images/items/research/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(research[i].name).appendTo(col);
        p = $('<p>').text(research[i].details).appendTo(col);
        $('<button>').text('$'+research[i].cost + ' R' + research[i].research).appendTo(div).attr({'onclick':research[i].onclick, 'id':'costbtnresearch'+i});
    }

}


// saving and loading data

window.onbeforeunload = function (e) {
    window.localStorage.setItem("unload", Date());
}

function save(){
    window.localStorage.setItem("data", JSON.stringify(data));
    window.localStorage.setItem("actions", JSON.stringify(actions));
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
    window.localStorage.setItem("research", JSON.stringify(research));
    window.localStorage.setItem("unlocks", JSON.stringify(unlocks));
    window.localStorage.setItem("events", JSON.stringify(events));
    window.localStorage.setItem("tutorial", JSON.stringify(tutorial));
    console.log('Data saved.')
}

var restart = false;


function restartgame(){
    restart = true;
    notify('Restart Game', 'Your saved data was deleted. Please restart the game.');
    localStorage.removeItem("data");
    localStorage.removeItem("actions");
    localStorage.removeItem("jobs");
    localStorage.removeItem("research");
    localStorage.removeItem("unlocks");
    localStorage.removeItem("events");
    localStorage.removeItem("tutorial");
}

window.setInterval(function(){
    if (!restart && gamestate){
        save();
    }
}, 500)






// Math stuff

function  nextcost(initialCost, costBase, currentCount) {
    return Math.round(100*(initialCost * Math.pow(costBase, currentCount + 1)))/100;
}
function log10(val) {
        return Math.log(val) / Math.LN10;
    }
function format(number, suppressDecimals) {

        var formatted;
        if(number === Number.POSITIVE_INFINITY) {
            formatted = "infinite";
        } else if(number < 1 && number >= 0) {
            if(suppressDecimals) {
                formatted = "0";
            } else {
                if(number > 0.001) {
                    formatted = number.toFixed(2) + "";
                } else {
                    if(number > 0.0001) {
                        formatted = number.toFixed(3) + "";
                    } else {
                        formatted = 0;
                    }
                }
            }
        } else {
            var negative = false;
            if(number < 0) {
                negative = true;
                number *= -1;
            }
            var suffixes = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc"];
            var digits = Math.floor(log10(number));
            var precision = 2 - (Math.floor(log10(number)) % 3);
            // in case the highest supported suffix is not specified
            precision = Math.max(0, precision);
            var suffixIndex = Math.floor(digits / 3);


            var suffix;
            if(suffixIndex >= suffixes.length) {
                formatted = "lots";
            } else {
                suffix = suffixes[suffixIndex];
                // fix number to be compliant with suffix
                if(suffixIndex > 0) {
                    number /= Math.pow(1000, suffixIndex);
                }
                if(suffixIndex === 0) {
                    formatted = (negative ? "-" : "") + Math.floor(number) + suffix;
                } else if(suffixIndex > 0) {
                    formatted = (negative ? "-" : "") + number.toFixed(precision) + suffix;
                } else {
                    formatted = (negative ? "-" : "") + number.toFixed(precision);
                }
            }
        }
        return formatted;
    }








// Loops for refreshing data values

window.setInterval(function(){

    $("#milk").text(format(data.milk));

    $("#milkcost").text("$ " + data.milkcost);
    $("#farmerrate").text('('+ jobs[0].rate +'/s)');
    $("#coins").text(format(data.coins));
    $("#farmers").text(format(jobs[0].count));

    $('#vendors').text(jobs[1].count)
    $("#vendorrate").text('('+ jobs[1].rate +'/s)');

    $("#scientists").text(format(jobs[2].count));
    $("#research").text(format(data.research));
    $("#scientistrate").text('('+ jobs[2].rate+'/s)');
    $("#cowcount").text(data.cowcount);
    $("#capacity").text(format(data.capacity));
    
    unlock();
}, 100);


function KeyDownFn(evt) {
if (evt.keyCode == 73 && evt.ctrlKey && evt.shiftKey) evt.preventDefault();
}








function unlock(){
    
    var i;

    // Looping through for button cost updates

    for (i=0; i < jobs.length;i++){
        $('#costbtnjobs' + i).text('$ ' + format(jobs[i].cost));
    }

    for (i=0; i < research.length;i++){
        $('#costbtnresearch' + i).text('$' + format(research[i].cost) + ' R'+format(research[i].research));
    }

    //Looping through research to check for visibility based on research

    for (i=0; i < research.length; i++){
        if (research[i].visible == false){
            if (data.level >= research[i].level){
                research[i].visible = true;
            }
        }
        if (research[i].completed == true){
            $('#research'+i).remove();
        }
    }


    // Looping through to see if money is enough for purchase BUTTON DISABLED OR ENABLED

    for (i=0; i < jobs.length; i++){
        if (jobs[i].cost < data.coins){
            $('#costbtnjobs' + i).attr('disabled', false);
        }
        else{
            $('#costbtnjobs' + i).attr('disabled', true);
        }
    }

    for (i=0; i < research.length; i++){
        if (research[i].cost < data.coins && research[i].research < data.research){
            $('#costbtnresearch' + i).attr('disabled', false);
        }
        else{
            $('#costbtnresearch' + i).attr('disabled', true);
        }
    }

    // Looping through to see if visibility for new items are true (eg unlocking "research")

    for (i=0; i < actions.length; i++){
        if (actions[i].visible == false){
            $('#actions'+i).css('display','none');
        }
        else{
            $('#actions'+i).css('display','flex')
        }
    }

    for (i=0; i < jobs.length; i++){
        if (jobs[i].visible == false){
            $('#jobs'+i).css('display','none');
        }
        else{
            $('#jobs'+i).css('display','flex')
        }
    }

    for (i=0; i < research.length; i++){
        if (research[i].visible == false){
            $('#research'+i).css('display','none');
        }
        else{
            $('#research'+i).css('display','flex')
        }
    }

    // Looping for events

    for (i=0; i < events.length; i++){
        if (data.level >= events[i].level && !events[i].completed){
            eval(events[i].function);
            events[i].completed = true;
        }
    }
}

function researchitem(i){
    if (data.coins > research[i].cost && data.research > research[i].research){
        data.coins-= research[i].cost;
        data.research -= research[i].research;
        $('#research'+i).remove();
        research[i].completed = true;
        data.level ++;
        console.log('Level '+ data.level);
        return true;
    }
    else{
        alert('error researching the item. Jayson probably made a mistake in the code.')
    }


}




// For CSS of the page and Tabs

function show(id){
    $('#home').css('display','none');
    $('#settings').css('display','none');
    $(id).css('display','block');
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