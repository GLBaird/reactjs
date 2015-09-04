// demo app for browserify

var $ = require('jquery');
var React = require('react');
var TitleBlock = require('./modules/TitleBlock')

if (typeof window !== "undefined") {
    // create a heading client side using JQuery
    $('body').append('<h1>Welcome to an isomorphic applicaion</h1>');
} else {
    console.log('running on the server!');
}

// Build UI using React
// TitleBlock.test();
