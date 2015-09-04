var React = require('react');

var TitleBlock = React.createClass({displayName: "TitleBlock",
    statics: {
        test: function() {
            console.log("TitleBlock loaded");
        }
    },
    getDefaultProps: function() {
        return {
            title: "Unnamed Component"
        };
    },
    style: {
        background: 'yellow',
        border: '1px solid black',
        borderRadius: '20px',
        boxShadow: '2px 2px 4px #b3b3b3',
        padding: '1em'
    },
    handClick: function(title, e) {
        e.preventDefault();
        alert("Clicked "+title);
    },
    render: function() {
        return (
            React.createElement("div", {style: this.style}, 
                React.createElement("h2", null, this.props.title), 
                React.createElement("a", {href: "#", onClick: this.handClick.bind(this, this.props.title)}, "Click Me")
            )
        );
    }
});

module.exports = TitleBlock;
