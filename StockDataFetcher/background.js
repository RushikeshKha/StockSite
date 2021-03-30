console.log("backgroung test")//PERMISSON TO RUN BACKGROUND SCRIPT
console.log("backgroung testing")
var data = {}
chrome.browserAction.onClicked.addListener(buttonC)//IT IS USED TO CAPTURE ONCLICKED EVENT ON TOOLBAR BUTTON

function buttonC(){
    console.log("Button Clicked")
    chrome.tabs.executeScript(null,{file:'back.js'});//IT IS USED TO EXECUTE SCRIPT IN CONTEXT  
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
