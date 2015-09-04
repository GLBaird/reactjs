/** @jsx React.DOM */

var React = require('react');
var PostBoard = require('./components/PostBoard');

React.render(
    <PostBoard />,
    document.getElementById('app_container')
);
