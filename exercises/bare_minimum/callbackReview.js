/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // use readFile to read contents of file and return data
  // split data at slashes or newline characters
  // return first item in newly split data
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      console.log('logging fileData returned from readFile => ', fileData.toString());
      var firstLine = fileData.toString().split(/\n/)[0];

      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
