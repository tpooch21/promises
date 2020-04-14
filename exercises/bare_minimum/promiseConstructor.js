/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  // Return new Promise instance
  // Similar logic to callback methodology, but no callback needs to be specified
  // Pass error values through to 'reject' function
  // Pass success values through to 'resolve' function
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        var firstLine = fileData.toString().split(/\n/)[0];
        console.log('Logging firstLine from input file => ', firstLine);
        resolve(firstLine);
      }
    });
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  // return new Promise
  // Within promise callback, perform standard getStatusCodeAsync functionality
  // request(), if error, instead of calling callback, call reject
  // If success, call resolve
  return new Promise((resolve, reject) => {
    request(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
