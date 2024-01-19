// Define the API endpoint URL
const api_url = "https://655.mtis.workers.dev/translate";

// Define the parameters for the request
const params = {
  text: 'Dog',               // The text you want to translate
  source_lang: 'en',         // Source language
  target_lang: 'fr'          // Target Language
};

// Construct the URL with parameters
const url = new URL(api_url);
url.search = new URLSearchParams(params).toString();

// Send a GET request to the API
fetch(url)
  .then(response => {
    // Check if the request was successful
    if (response.ok) {
      // Parse and print the response JSON
      return response.json();
    } else {
      throw new Error('Error: ' + response.statusText);
    }
  })
  .then(data => {
    console.log("Input:", data.inputs);
    console.log("Response:", data.response);
  })
  .catch(error => {
    console.error(error);
  });
