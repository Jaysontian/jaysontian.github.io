




// saving and loading data


window.onbeforeunload = function (e) {
    window.localStorage.setItem("unload", Date());
}

function save(){
    window.localStorage.setItem("save", JSON.stringify(data));
    window.localStorage.setItem("actions", JSON.stringify(actions));
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
    window.localStorage.setItem("research", JSON.stringify(research));
    window.localStorage.setItem("unlocks", JSON.stringify(unlocks));
    console.log('Data saved.')
}

function loaddata(){
    savedata = JSON.parse(window.localStorage.getItem("save"));
    actionsave = JSON.parse(window.localStorage.getItem("actions"));

    if (savedata !== null && actionsave !== null){
        data = savedata;
        actions = actionsave;
        jobs = JSON.parse(window.localStorage.getItem("jobs"));
        research = JSON.parse(window.localStorage.getItem("research"));
        unlocks = JSON.parse(window.localStorage.getItem("unlocks"));

        var startDate = new Date(window.localStorage.getItem("unload"));
        // Do your operations
        var endDate =  new Date();
        var seconds = Math.round((endDate.getTime() - startDate.getTime()) / 1000 / 60 );
        
        notify('Saved Data', 'You saved data was loaded successfully! You were away for: ' + seconds + ' minutes.' );

        console.log("Saved data loaded sucessfully.")
    }
    else {
        console.log("New Game");
        notify('New Game', 'Welcome to Moo Inc.!');
    }
}

var restart = false;

function restartgame(){
    restart = true;
    notify('Restart Game', 'Your saved data was deleted. Please restart the game.');
    localStorage.removeItem("save");
    localStorage.removeItem("actions")
    localStorage.removeItem("jobs")
    localStorage.removeItem("research")
    localStorage.removeItem("unlocks")
}

window.setInterval(function(){
    if (!restart){
        save();
    }
}, 1000)





// Notification Stuff

function notify(title, text){
    $('#notify-title').text(title);
    $('#notify-text').text(text);
    $('#notify').css('display','block');
}

function closenotify(){
    $('#notify').css('display','none');
}


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


function milk(){
    data.milk ++;
}

// When the page loads

window.onload = (event) => {
    loaddata();
    $('#milk-div').css('display','block');
    $('#price-div').css('display','block');
    $('.actions').css('display','block');
    openCity(event, 'Actions');
    generate();
    Game.auto();
    loadbuttonextension();
}

/**
 * Returns the function that you want to execute through its name.
 * It returns undefined if the function || property doesn't exists
 * 
 * @param functionName {String} 
 * @param context {Object || null}
 */
function getFunctionByName(functionName, context) {
    // If using Node.js, the context will be an empty object
    if(typeof(window) == "undefined") {
        context = context || global;
    }else{
        // Use the window (from browser) as context if none providen.
        context = context || window;
    }

    // Retrieve the namespaces of the function you want to execute
    // e.g Namespaces of "MyLib.UI.alerti" would be ["MyLib","UI"]
    var namespaces = functionName.split(".");
    
    // Retrieve the real name of the function i.e alerti
    var functionToExecute = namespaces.pop();
    
    // Iterate through every namespace to access the one that has the function
    // you want to execute. For example with the alert fn "MyLib.UI.SomeSub.alert"
    // Loop until context will be equal to SomeSub
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    
    // If the context really exists (namespaces), return the function or property
    if(context){
        return context[functionToExecute];
    }else{
        return undefined;
    }
}



function generate(){
    var i;

    for (i=0;i<actions.length;i++){
        var div = $('<div>').appendTo('#Actions').attr({'class':'item','id':'actions'+i});
        $('<img>').attr('src','images/items/actions/'+i+'.png').appendTo(div);
        var col = $('<div>').addClass('column').appendTo(div);
        $('<h2>').text(actions[i].name).appendTo(col);
        p = $('<p>').text(actions[i].details).appendTo(col);

        var btn = $('<button>').text('Execute').appendTo(div).attr('onclick',actions[i].onclick)
 /*       var btn = document.createElement("BUTTON");
        btn.innerHTML = "Execute";                 
        document.getElementById('actions'+i).appendChild(btn);


        btn.addEventListener('click', function() {
            window[actions[i].onclick]()
        });*/
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



// Loops for refreshing data values

window.setInterval(function(){

    $("#milk").text(format(data.milk, true));

    /*var Cont={val: data.milk } , NewVal = data.milk ;

    TweenLite.to(Cont,1,{val:NewVal,roundProps:"val",ease:Linear.easeNone,onUpdate:function(){
      $("#milk").text(format(Cont.val));
    }});*/

    $("#milkcost").text("$ " + data.milkcost);
    $("#farmerrate").text('('+jobs[0].rate+'/s)');
    $("#coins").text(format(data.coins));
    $("#farmers").text(format(jobs[0].count));

    $('#vendors').text(jobs[1].count)
    $("#vendorrate").text('('+jobs[1].rate+'/s)');

    $("#scientists").text(format(jobs[2].count));
    $("#research").text(format(data.research));
    $("#scientistrate").text('('+jobs[2].rate+'/s)');
    
    unlock();
}, 100);











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
            if (data.research >= research[i].research){
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