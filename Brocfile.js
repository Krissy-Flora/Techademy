/*
	Description:
	The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.

	Syntax:
	new Number(value);
*/

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	'ember-bootstrap': {
		'importBootstrapTheme': true
	}
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
