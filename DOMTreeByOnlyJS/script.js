const root = document.createElement("html");
root.lang = "en";

// Create <head> and <title>
const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

// Create <body> and its children
const body = document.createElement("body");

// Create an <input> element
const input = document.createElement("input");
input.type = "button"; // Use button for clickability
input.value = "Click me to change document";

// Counter to track the number of clicks


// Create an <h1> header
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));

// Create a <p> paragraph
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));

// Append elements to the body
body.appendChild(input); // Add the input field
body.appendChild(header);
body.appendChild(paragraph);

// Assemble the document
root.appendChild(head);
root.appendChild(body);


let clickCount = 0;

// Add the onclick attribute directly
input.onclick = function () {
    // clickCount++;
    // header.textContent = `Document Changed! (Clicked ${clickCount} times)`;
    // paragraph.textContent = `You clicked the button ${clickCount} time(s), and the document updated!`;
    // input.value = `Click again (${clickCount})`;

    header.firstChild.data = "A dynamic document";
    paragraph.firstChild.data = "This is the first paragraph.";

    // Create a new Text node for the second paragraph
    const newText = document.createTextNode("This is the second paragraph.");

    // Create a new Element to be the second paragraph
    const newElement = document.createElement("p");

    // Put the text in the paragraph
    newElement.appendChild(newText);

    // Put the paragraph on the end of the document by appending it to
    // the body (which is the parent of para)
    paragraph.parentNode.appendChild(newElement);
};

// Replace the document's root
document.documentElement.replaceWith(root);



