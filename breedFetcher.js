const request = require('request');
const breed = process.argv.slice(2);
console.log(breed);
const fetchBreedDescription = function(breedName, callback) { 
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log(typeof body);
    const data = JSON.parse(body);
    try {
      callback(null, data[0].description);
    } catch (error) {
      callback(error, "Invalid Breed");
    }
  });
};

module.exports = { fetchBreedDescription };