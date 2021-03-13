console.log("backgroung test")
console.log("backgroung testing")
var data = {}
chrome.browserAction.onClicked.addListener(buttonC)

function buttonC(){
    console.log("Button Clicked")
    chrome.tabs.executeScript(null,{file:'back.js'});
    chrome.tabs.executeScript(null,{code:'console.log("test");'})
}

// Listening to messages page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    console.log(JSON.stringify(request))
    data = JSON.stringify(request)
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://127.0.0.1:8000?data='+data,true)
    xhr.send()

    // Callback for that request
    sendResponse({ message: "Background has received that message" });
});
