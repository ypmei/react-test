import jsdom from 'jsdom'

if(typeof document === 'undefined'){
	global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
	global.window = document.defaultView;
	global.navigator = global.window.navigator;
}


// "test": "mocha --compilers js:babel-core/register --require babel-polyfill ./test/setup.js --recursive ./test",