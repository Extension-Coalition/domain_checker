const axios = require("axios");
const form = document.getElementById('form');
const response = document.getElementById('checked');

function logSubmit(event) {

}

const options = {
  method: "GET",
  url: "https://domain-checker7.p.rapidapi.com/whois",
  params: { domain: "rapidapi.com" },
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "domain-checker7.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
  });
