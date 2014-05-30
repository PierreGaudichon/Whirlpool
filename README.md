Javascript-Whirlpool-hash
=========================

* Originally relased to public domain by _Sean Catchpole_: http://www.sunsean.com/Whirlpool.html
* Froked from jeffsteinport : https://github.com/jeffsteinport/Javascript-Whirlpool-hash
* Any modifications released under BSD 2-Clause License: http://opensource.org/licenses/BSD-2-Clause


Installation
===========

	$ npm install whirlpool


Usage
=====

`Whirlpool` takes a string as parameter and return a another string.

##Node

	wh = require("whirlpool");
	wh.hash("string");

##Browser

	<script type="text/javascript" src="./whirlpool.js"></script>
	<script type="text/javascript">
		Whirlpool("string");
	</script>

##CLI

	$ npm install -g whirlpool
	$ whirlpool string