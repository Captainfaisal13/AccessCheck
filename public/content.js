function analyzeAccessibility() {
  const node = document.querySelectorAll("*");

  console.log(node[59].alt);
  console.log(node[3]);
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
  const tagName = element.tagName.toLowerCase();
  let message;
  switch (tagName) {
    case "img":
      // Check if image element has alt attribute
      if (element.alt) {
        message = "Image elements should have descriptive alt attributes.";
      }
      break;

    case "a":
      // Check if anchor element has text content or aria-label attribute
      if (
        element.textContent.trim().length === 0 &&
        !element.getAttribute("aria-label")
      ) {
        message =
          "Anchor elements should have descriptive text or an aria-label attribute.";
      }
      break;

    case "button":
      // Check if button element has text content or aria-label attribute
      if (
        element.textContent.trim().length === 0 &&
        !element.getAttribute("aria-label")
      ) {
        message =
          "Buttons should have descriptive text or an aria-label attribute.";
      }
      break;

    case "audio":
    case "video":
      // Check if multimedia elements have text alternatives (e.g., audio or video transcripts)
      if (!element.textContent.trim()) {
        message = "Multimedia elements should have text alternatives.";
      }
      break;

    case "form":
      // Check if form element has a fieldset and legend for grouping and labeling controls
      if (!element.querySelector("fieldset, legend")) {
        message =
          "Forms should be grouped with a fieldset and legend for labeling controls.";
      }
      break;

    case "label":
      // Check if label element is missing the 'for' attribute
      if (!element.getAttribute("for")) {
        message =
          "Label elements should have a 'for' attribute pointing to the associated control.";
      }
      break;

    case "table":
      // Check if table element has a caption for describing its content
      if (!element.querySelector("caption")) {
        message = "Tables should have a caption for describing their content.";
      }
      break;

    case "iframe":
      // Check if iframe element has a meaningful title attribute
      if (!element.title) {
        message = "Iframes should have meaningful title attributes.";
      }
      break;

    case "textarea":
      // Check if textarea element has a label associated
      if (!element.id && !element.labels.length) {
        message =
          "Textarea elements should be associated with a label for clarity.";
      }
      break;

    case "select":
      // Check if select element has an associated label
      if (!element.id && !element.labels.length) {
        message =
          "Select elements should be associated with a label for clarity.";
      }
      break;

    case "option":
      // Check if option element has text content
      if (!element.textContent.trim()) {
        message = "Option elements should have text content.";
      }
      break;

    case "fieldset":
      // Check if fieldset element has a legend
      if (!element.querySelector("legend")) {
        message =
          "Fieldset elements should have a legend for describing their purpose.";
      }
      break;

    case "ul":
    case "ol":
      // Check if list elements have list items
      if (!element.querySelector("li")) {
        message =
          "List elements should contain list items for proper structure.";
      }
      break;

    case "li":
      // Check if list item element has text content
      if (!element.textContent.trim()) {
        message = "List item elements should have descriptive text content.";
      }
      break;

    // Add more cases for other elements as needed...

    default:
      return;
      break;
  }
  if (!message) return;

  // const computedStyle = window.getComputedStyle(curr);
  // console.log(computedStyle.position);

  var rect = curr.getBoundingClientRect();

  var divElement = document.createElement("div");

  // Set the position to fixed
  divElement.style.position = "absolute";

  // Set the left attribute
  divElement.style.left = rect.right + "px";

  // Set the right attribute
  divElement.style.top = rect.bottom + "px";
  divElement.style.borderColor = "#B31312";
  divElement.style.backgroundColor = "#2B2A4C";
  divElement.style.borderWidth = "2px";
  divElement.style.color = "#EA906C";
  divElement.style.padding = "6px";
  divElement.style.borderRadius = "8px";
  divElement.classList.add("accessibility-issue");
  divElement.style.zIndex = "1000";
  divElement.style.fontSize = "12px";
  divElement.style.fontWeight = "bold";
  divElement.style.maxWidth = "300px";
  //   divElement.className += " bg-[#ff474c] text-red-400";

  // Add some content to the div
  divElement.innerText = message;
  // divElement.style.color = "red";

  // div.textContent = "This image is missing an alt attribute.";
  document.body.appendChild(divElement);
  // Style the div as per your requirement
  // div.style.background = "red";
  // div.style.color = "white";
  // div.style.padding = "5px";

  // Insert the div before the image element
  // curr.insertBefore(curr, div);
}

//   message= false;

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

// on window resize
window.addEventListener("resize", () => {
  clearResults();
  analyzeAccessibility();
});
