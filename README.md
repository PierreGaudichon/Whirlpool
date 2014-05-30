Whirlpool
=========

* Originally relased to public domain by _Sean Catchpole_: http://www.sunsean.com/Whirlpool.html
* Froked from jeffsteinport : https://github.com/jeffsteinport/Javascript-Whirlpool-hash
* Any modifications released under BSD 2-Clause License: http://opensource.org/licenses/BSD-2-Clause


Installation
============

	$ git clone https://github.com/PierreGaudichon/Javascript-Whirlpool-hash.git
	$ npm install -g Javascript-Whirlpool-hash/


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

	$ whirlpool string

To hash the content of a file :

	$ whirlpool -f path