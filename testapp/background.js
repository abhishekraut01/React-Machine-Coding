// Background script for handling extension lifecycle
chrome.runtime.onInstalled.addListener(() => {
  console.log('AI Chat API Tester extension installed');
});

// Optional: Add context menu integration
chrome.contextMenus.create({
  id: "openApiTester",
  title: "Test with AI API",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openApiTester") {
    // Store selected text and open popup
    chrome.storage.local.set({
      selectedText: info.selectionText
    });
    chrome.action.openPopup();
  }
});
