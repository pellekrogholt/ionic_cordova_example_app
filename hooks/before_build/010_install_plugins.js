#!/usr/bin/env node
 
//this hook installs all your plugins
 
// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL

// note:
// many of the plugins has angualr friendly wrapper for injection!/
// http://ngcordova.com/docs/
var pluginlist = [
  "com.ionic.keyboard",
  "org.apache.cordova.network-information",
  "org.apache.cordova.device",
  "org.apache.cordova.statusbar",
  "org.apache.cordova.console"
];
 
// no need to configure below
 
var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    sys.puts(stdout)
}
 
pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});
