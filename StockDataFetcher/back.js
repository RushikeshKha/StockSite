console.log("contextScript")//GOT PERMISSION FROM MANIFEST.JSON TO RUN CONTENT SCRIPT

// Sending messages from Content Script
const msg = 'test from content Script'//MESSAGE
chrome.runtime.sendMessage({ message: {name:"rushikesh",lname:"Khadikar"} }, function(response) {
    console.log(response);
});//THIS FUNCTION IS USED TO SEND MESSAGE TO BACKGROUND SCRIPT

setInterval(() => {
    chrome.runtime.sendMessage({ message: {name:"rushikesh",lname:"Khadikar"} }, function(response) {
        console.log(response);
    });
}, 10000);//THIS FUNCTION IS USED TO SET INTERVALS FOR 10SEC

// Listening to messages in Context Script FROM BACKGROUND SCRIPT
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback
    sendResponse({ message: 'Content script has received that message' })
})