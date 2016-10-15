chrome.browserAction.onClicked.addListener(function  (tab) {
	chrome.tabs.executeScript(tab.id, {file: 'js/content.js'});
	chrome.tabs.insertCSS(tab.id, { file: 'css/main.css' });
})


