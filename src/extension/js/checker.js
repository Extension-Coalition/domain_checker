// const axios = require("axios");
const form = document.getElementById("form");
const results = document.getElementById("checked");

async function logSubmit(event) {
  event.preventDefault();

  // Clear prev search results
  results.innerHTML = "";

  // Fetch logic
  const searchValue = event.target.elements.search.value;
  const url =
    "https://knock-knock.azurewebsites.net/domain-info/" + searchValue;
  const response = await fetch(url);
  const data = await response.json();

  // Display results logic
  if (data.length >= 1) {
    // run array logic
    data.forEach((domain) => {
      const pElement = document.createElement("p");
      pElement.innerText = domain.hostName;
      results.appendChild(pElement);

      const p2Element = document.createElement("p");
      p2Element.style.borderBottom = "1px solid black";
      if (domain.inUse) {
        p2Element.innerText = "Not available";
      } else {
        p2Element.innerText = "Available";
      }
      results.appendChild(p2Element);
    });
  } else {
    // Just one response logic
    const pElement = document.createElement("p");
    pElement.innerText = data.hostName;
    results.appendChild(pElement);

    const p2Element = document.createElement("p");
    p2Element.style.borderBottom = "1px solid black";
    if (data.inUse) {
      p2Element.innerText = "Not available";
    } else {
      p2Element.innerText = "Available";
    }
    results.appendChild(p2Element);
  }
}

form.addEventListener("submit", logSubmit);
