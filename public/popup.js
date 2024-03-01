function analyzeAccessibility() {
  clearResults();

  // Fetch all elements in the DOM
  const allElements = document.querySelectorAll("*");

  found = 0;
  on;
  allElements.forEach((element) => {
    const hasAccessibilityIssue = checkAccessibilityIssue(element);

    if (hasAccessibilityIssue) {
      found++;
      displayAccessibilityIssue(element);
    }
  });

  if (!found) {
    notFound();
  }
}

function checkAccessibilityIssue(element) {
  if (element.tagName.toLowerCase() === "img" && !element.alt) {
    return true;
  }

  return false;
}

function displayAccessibilityIssue(element) {
  const issueDiv = document.createElement("div");
  issueDiv.textContent = `Accessibility issue: ${element.tagName} element is missing required attributes.`;

  document.body.appendChild(issueDiv);
}

function notFound() {
  console.log("nothing found");
}

function clearResults() {
  const accessibilityIssues = document.querySelectorAll(".accessibility-issue");
  accessibilityIssues.forEach((issue) => issue.remove());
}

document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyze");
  analyzeButton.addEventListener("click", analyzeAccessibility);
});
