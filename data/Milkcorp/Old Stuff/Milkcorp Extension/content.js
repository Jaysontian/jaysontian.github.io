// content.js

var pic = document.createElement("IMG");

pic.setAttribute('src','https://media.giphy.com/media/U9pFpXWGJyc5q/giphy.gif')
pic.id = 'cowimage';
document.body.appendChild(pic);

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('closenotifybtn');
    // onClick's logic below:
    link.addEventListener('click', function() {
        closenotify()
    });
});



// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);




// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);