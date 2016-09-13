/**
 * 1. Sets the Node environment to variable to test``
 * 2. Registers babel for transpiling our code for testing
 * 3. Disables Webpack-specific features that Mocha doesn't need
 * 4. Requires jsdom so we can test via an in-memory DOM in node
 * 5. Setups global vars that mimic a browser
 */

/* eslint-disable no-var */

process.env.NODE_ENV = 'test';

require('babel-register');

/* Disable webpack-specific features for tests since
 * Mocha doesn't know what to do with them*/
require.extensions['.css'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.jpg'] = function () {
    return null;
};

// Configure JsDOM and set global variables to simulate a browser
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property)=>{
    if(typeof global[property] === 'undefined'){
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};