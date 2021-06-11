console.log("contextScript")//GOT PERMISSION FROM MANIFEST.JSON TO RUN CONTENT SCRIPT

// Sending messages from Content Script
const msg = 'test from content Script'//MESSAGE
chrome.runtime.sendMessage({ message: {name:"rushikesh",lname:"Khadikar"} }, function(response) {
    console.log(response);
});//THIS FUNCTION IS USED TO SEND MESSAGE TO BACKGROUND SCRIPT
function getStockData(num){
    var stkdata = [];
    for(i=2;i<num;i++){
        var stckName = document.querySelector("body > div.js-rootresizer__contents > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-1quyc-Kt.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.scrollable-2mu5oKC8 > div > div.listContainer-3U2Wf-wc > div > div:nth-child("+i+") > div > div > div.firstItem-EJ_LFrif.symbolName-EJ_LFrif > span > span.inner-EJ_LFrif.symbolNameText-EJ_LFrif").textContent
        var stckPrice = document.querySelector("body > div.js-rootresizer__contents > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widget-1quyc-Kt.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody > div > div.scrollable-2mu5oKC8 > div > div.listContainer-3U2Wf-wc > div > div:nth-child("+i+") > div > div > span.cell-EJ_LFrif.last-EJ_LFrif").textContent;
    }
    return {stockName:stckName,stockPrice:stckPrice};}

    function getStockPrice(num){
        var a = [];
        num = num + 2;
        for(i=2;i<=num;i++){
            a.push(getStockData(i))
        }
       return a}
setInterval(() => {
    var len = document.getElementsByClassName("listContainer-3U2Wf-wc")[0].getElementsByTagName("div")[0].getElementsByClassName('wrap-1a1_EyKG').length
    chrome.runtime.sendMessage({ message: getStockPrice(len) }, function(response) {
        console.log(response);
    });
}, 10000);//THIS FUNCTION IS USED TO SET INTERVALS FOR 10SEC

// Listening to messages in Context Script FROM BACKGROUND SCRIPT
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback
    sendResponse({ message: 'Content script has received that message' })
})