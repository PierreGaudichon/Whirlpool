#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var commander = require("commander");
var wh = require("./whirlpool");


var hashFile = function(fileName){
	fs.readFile(fileName, function(err, data){
		if (err) { throw err; }
		str = data.toString("utf8");
		hashString(str);
	});
};

var hashString = function(string){
	console.log(wh.hash(string));
};




var version = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'))).version;

commander
	.version(version)
	.usage("[options] string")
	.option("-f, --file [file]", "Hash the content of a file.")
	.parse(process.argv)
	.name = "whirlpool";


if (commander.file) {
	hashFile(commander.file);
}
else if (commander.args.length) {
	for (var i = 0; i < commander.args.length; i++) {
		hashString(commander.args[i]);
	};
}
else {
	commander.help();
}