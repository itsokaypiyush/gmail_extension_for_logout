chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});

// Function to call Flask API
async function logoutGmail() {
    const apiUrl = "http://127.0.0.1:5001/logout-gmail";
    try {
        let response = await fetch(apiUrl);
        console.log("Logout request sent:", response.status);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Listen for message from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "logout") {
        logoutGmail();
        sendResponse({ success: true });
    }
});
