chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var links = document.querySelectorAll("a[href^='http']");
      //console.log(links);
      for(let i=0; i<links.length; i++){
        var currentLink = links[i].href
        var currentName = links[i].innerHTML
        console.log(`(${i+1})=${currentName}:${currentLink}`);
      }
      // This line is new!
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
