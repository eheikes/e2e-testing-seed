#!/usr/bin/env node
//
// Waits for a 200 status from the specified URL.
//
var request = require('request');
var url = process.argv[2];
var ok = false;

console.log('Waiting for ' + url + ' ...');
function checkUrl() {
  request(url, function(err, res) {
    if (err || res.statusCode !== 200) {
      setTimeout(checkUrl, 5000);
    }
  });
}
