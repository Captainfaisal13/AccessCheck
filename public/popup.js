document.getElementById("analyze").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "analyze" }, (response) => {
    console.log(response);
  });
});
