var test = require('tape');
var loadCss = require('../index.js');

test('load css with string parameter', function(t) {
	t.plan(1);
	loadCss('https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css');
	t.ok(true);
});

test('load css with object parameter', function(t) {
	t.plan(1);
	loadCss({
		href: 'https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css',
		rel: 'stylesheet',
		text: 'text/css'
	})
	t.ok(true);
});
