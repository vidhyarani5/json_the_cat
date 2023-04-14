const request = require('request');
const breed = process.argv.slice(2);
console.log(breed);
request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the dog breed
  console.log(typeof body);
  const data = JSON.parse(body);
  try {
    console.log(data[0].name);
  } catch (error) {
    console.log(error.message);
  }
});