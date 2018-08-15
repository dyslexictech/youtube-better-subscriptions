const PREFIX = "osasoft-better-subscriptions_";

let brwsr;
try {
    brwsr = browser;
} catch (e) {
    if (e instanceof ReferenceError) {
        brwsr = chrome;
    }
}

function getStorage() {
    return brwsr.storage.local //TODO: use sync?
}

function setVideoInStorage(videoId) {
    let obj = {};
    obj[videoId] = Date.now();
    getStorage().set(obj);
}

function injectScript(scriptString, removeAfterExec = true) {
    let injectedScript = document.createElement("script");
    injectedScript.innerHTML = scriptString;

    document.head.appendChild(injectedScript);

    if (removeAfterExec) {
        //remove after execution
        document.head.removeChild(injectedScript);
    }
}
