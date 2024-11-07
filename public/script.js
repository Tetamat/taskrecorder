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

  // Update the content div
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = pageContent[page];
}

// Initially, show the initial page
document.getElementById('content').innerHTML = initialContent;