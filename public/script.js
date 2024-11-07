import firebase from 'firebase/app';
import 'firebase/auth';
// Initial page content
const initialContent = `
  <button onclick="showPage('project')">Project</button>
  <button onclick="showPage('delivery')">Delivery</button>
  `;

// Function to dynamically update the content
function showPage(page) {
  // Replace this with your actual database fetching logic
  const pageContent = {
    project: "Project-specific content",
    delivery: "Delivery-specific content",
    // ... other page content ...
  };

  // Create a back button for dynamic pages
  const backButton = `<button onclick="goBack()">Back</button>`;

  // Update the content div
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = backButton + pageContent[page];
}

// Function to go back to the initial page
function goBack() {
  document.getElementById('content').innerHTML = initialContent;
}

// Initially, show the initial page
document.getElementById('content').innerHTML = initialContent;