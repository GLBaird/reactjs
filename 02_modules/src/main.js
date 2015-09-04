// MAIN APPLICATION

var $ = require('jquery');
var React = require('react');

$("body").css("background", "blue");

// load our component

var TitleBlock = require('./modules/TitleBlock/TitleBlock');
React.render(
    React.createElement(TitleBlock, null, null), 
    document.body);
