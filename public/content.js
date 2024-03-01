function analyzeAccessibility() {
  const node = document.querySelectorAll("*");

  //   console.log(node[59].alt);
  //   console.log(node[3]);
  //   clearResults();

  // Fetch all elements in the DOM
  // const allElements = document.querySelectorAll("*");

  // found = 0;
  node.forEach((element) => {
    const hasAccessibilityIssue = checkAccessibilityIssue(element);

    //   if (hasAccessibilityIssue) {
    //     found++;
    //     displayAccessibilityIssue(element);
    //   }
  });

  // if (!found) {
  //   notFound();
  // }
}

function checkAccessibilityIssue(element) {
  const curr = element;
  if (curr.tagName.toLowerCase() === "img") {
    console.log(curr.parentElement);

    const div = document.createElement("div");
    div.textContent = "This image is missing an alt attribute.";

    // Style the div as per your requirement
    div.style.background = "red";
    div.style.color = "white";
    div.style.padding = "5px";

    // Insert the div before the image element
    // curr.insertBefore(curr, div);
  }

  //   return false;
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

analyzeAccessibility();
// document.addEventListener("DOMContentLoaded", function () {});
