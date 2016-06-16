var gulp = require('gulp');
var path = require('path');
var selenium = require('selenium-standalone');
var spawn = require('child_process').spawn;

var seleniumProcess = null; // track the selenium process

gulp.task('default', ['test']);

gulp.task('selenium:install', function(done) {
  selenium.install(done);
});

gulp.task('selenium:start', ['selenium:install'], function(done) {
  selenium.start(function(err, process) {
    seleniumProcess = err ? null : process;
    done();
  });
});

gulp.task('test', ['selenium:start'], function(done) {
  var cmd = process.platform === 'win32' ? 'nightwatch.cmd' : 'nightwatch';
  var fullCmd = path.join('node_modules', '.bin', cmd);
  var args = ['--config', 'tests/nightwatch.conf.js'];
  if (process.env.env) {
    args.push('--env', process.env.env);
  }
  var nw = spawn(fullCmd, args);
  nw.stdout.on('data', function(data) {
    console.log(data.toString());
  });
  nw.stderr.on('data', function(data) {
    console.log(data.toString());
  });
  nw.on('close', function(code) {
    if (seleniumProcess) {
      seleniumProcess.kill();
      seleniumProcess = null;
    }
    done();
  });
  nw.on('error', done);
});
