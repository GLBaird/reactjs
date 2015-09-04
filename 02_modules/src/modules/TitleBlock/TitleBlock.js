var React = require('react');

var TitleBlock = React.createClass({
    sayHello: function() {
        alert("HI");
    },
    render: function() {
        return React.createElement("h1", null, "I am a module");
    }
});

module.exports = TitleBlock;
