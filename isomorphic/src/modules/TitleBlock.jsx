var React = require('react');

var TitleBlock = React.createClass({
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
            <div style={this.style}>
                <h2>{this.props.title}</h2>
                <a href="#" onClick={this.handClick.bind(this, this.props.title)}>Click Me</a>
            </div>
        );
    }
});

module.exports = TitleBlock;
