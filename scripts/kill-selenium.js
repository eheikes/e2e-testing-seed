#!/usr/bin/env node
//
// Kills any running selenium-standalone process.
//
var fkill = require('fkill');
var psList = require('ps-list');

psList().then(function(processes) {
  var pids = processes.filter(function(process) {
    if (/\.bin\/selenium-standalone/.test(process.cmd)) {
      console.log('Killing process:', process.cmd);
      return true;
    }
    return false;
  }).map(function(process) {
    return process.pid;
  });
  fkill(pids);
});
