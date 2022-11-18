// const axios = require("axios");
const form = document.getElementById("form");
const response = document.getElementById("checked");

function logSubmit(event) {
  response.textContent = `You entered: ${event.}`;
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  response.innerHTML = "You submitted" + text.value;
});

// const options = {
//   method: "GET",
//   url: "https://domain-checker7.p.rapidapi.com/whois",
//   params: { domain: "rapidapi.com" },
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });
