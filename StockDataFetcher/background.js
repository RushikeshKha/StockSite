console.log("backgroung test")
console.log("backgroung testing")

chrome.browserAction.onClicked.addListener(buttonC)

function buttonC(){
    console.log("Button Clicked")
    chrome.tabs.executeScript(null,{file:'back.js'});
}

// Listening to messages page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback for that request
    sendResponse({ message: "Background has received that message" });
});
