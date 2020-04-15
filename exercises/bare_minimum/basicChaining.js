/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var callbacks = require('./callbackReview');

var promisifications = require('./promisification');

var readFileAsync = Promise.promisify(callbacks.pluckFirstLineFromFile);
var writeFileAsync = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // retrieve username from readFilePath from first line of file
  return readFileAsync(readFilePath)
    .then((user) => {
      return promisifications.getGitHubProfileAsync(user);
    })
    .then((profile) => {
      return writeFileAsync(writeFilePath, JSON.stringify(profile));
    })
    .catch((error) => {
      console.log('error fetching user profile from GitHub');
    });
  // save username into variable
  // pass username as arg to getGitHubprofileAsync
  // sends a request to GitHub API ^^
  // .then() --> takes in JSON response and calls fs.writeFileAsync (promisified)
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
