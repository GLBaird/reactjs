// demo app for browserify

var React = require('react');
var TitleBlock = require('./build/modules/TitleBlock');
var TitleBlockFactory = React.createFactory(TitleBlock);

// test TitleBlock
TitleBlock.test();

// create instance of title component
var title = TitleBlockFactory({title: "WOW, this works!!"});

// render in the browser or as HTML
console.log('running on the server!');

var html = React.renderToString(title);

console.log('html output:\n'+ html);
