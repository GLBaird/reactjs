// demo app for browserify

var $ = require('jquery');
var React = require('react');
var TitleBlock = require('./build/modules/TitleBlock');
var TitleBlockFactory = React.createFactory(TitleBlock);

// test TitleBlock
TitleBlock.test();

// create instance of title component
var title = TitleBlockFactory({title: "WOW, this works!!"});

// create a heading client side using JQuery
$('body')
    .append('<h1>Welcome to an isomorphic applicaion</h1>')
    .append('<div id="reactBlock"> Empty </div>');

React.render(title, document.getElementById("reactBlock"));
