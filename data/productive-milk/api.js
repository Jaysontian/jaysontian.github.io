// Client ID and API key from the Developer Console
var CLIENT_ID = '356261752219-mcsalnuu1tilted0lnbrukbav5qr962r.apps.googleusercontent.com';
var API_KEY = 'AIzaSyD4hbzzR4ie-y2nDl8Yd9B9cnss5dZIWGU';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/tasks";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listTaskLists();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

function appendLi(msg) {
  var pre = document.getElementById('content');
  var textContent = document.createElement("LI");
  textContent.innerHTML = msg;
  pre.appendChild(textContent);
}

/**
 * Print task lists.
 */



/*
function listTaskLists() {
  gapi.client.tasks.tasklists.list({
      'maxResults': 10
  }).then(function(response) {
    appendPre('Task Lists:');
    var taskLists = response.result.items;
    if (taskLists && taskLists.length > 0) {
      for (var i = 0; i < taskLists.length; i++) {
        var taskList = taskLists[i];
        var con = $('<div>').attr({'class':'con lime','id':taskList.id}).appendTo('.nav');
        $('<h1>').text(taskList.title).appendTo(con);
        gapi.client.tasks.tasks.list({
            'tasklist':taskList.id
          }).then(function(response){

            var taskItems = response.result.items;
            if (taskItems && taskItems.length > 0) {
              for (var i = 0; i < taskItems.length; i++) {
                var taskItem = taskItems[i];
                $('<li>').text(taskItem.title).appendTo(con);
              }
            } else {
              appendPre('No tasks found.');
            }
          })
      }
    } else {
      appendPre('No task lists found.');
    }
  });
} 
*/

var currentlist = 'MTIxMDc5MzQ3MjU3NzA3MzgyNjI6MDow'

function listTaskLists() {
  $('.mainlist').empty();

  gapi.client.tasks.tasks.list({
      'tasklist':'MTIxMDc5MzQ3MjU3NzA3MzgyNjI6MDow',
      'showCompleted':false
    }).then(function(response){

      var taskItems = response.result.items;
      if (taskItems && taskItems.length > 0) {
        for (var i = 0; i < taskItems.length; i++) {
          var taskItem = taskItems[i];
          $('<li>').text(taskItem.title).appendTo('.mainlist').attr('id',taskItem.id);;
        }
      } else {
        appendPre('No tasks found.');
      }
    })
} 

$('.input').keypress(function (e) {
  if (e.which == 13) {
    var taskname = $('.input').val();
    addTask(taskname);
  }
});

function addTask(name){
  tsk = {
    'tasklist':'MTIxMDc5MzQ3MjU3NzA3MzgyNjI6MDow',
    'title':name,
  }

  gapi.client.tasks.tasks.insert(tsk).then(function(){
      update();
      $('.input').val('');
      $('<li>').appendTo('.mainlist').text(name).attr('onclick','remove(id'+name+')');
  });
}



function update(){
    gapi.client.tasks.tasklists.update({
      'tasklist':'MTIxMDc5MzQ3MjU3NzA3MzgyNjI6MDow'
    }).then()
}

$('.mainlist').on('click',function(e){
    var t = e.target;
    $(t).remove();
    var taskid = $(t).attr('id');

    tsk = {
    'task':taskid,
    'tasklist':'MTIxMDc5MzQ3MjU3NzA3MzgyNjI6MDow'
    }

    gapi.client.tasks.tasks.delete(tsk).then(update());
  })

