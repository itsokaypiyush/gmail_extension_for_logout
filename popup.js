document.getElementById("logout-btn").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "logout" }, (response) => {
        console.log("Logout initiated:", response);
    });
});
