/** @jsx React.DOM */

var React = require('react');

var Note = require('./Note');

var PostBoard = React.createClass({

    style: {
        background: "#b59c31",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0"
    },

    getInitialState: function() {
        return {
            notes: [
                "Get milk from the shops",
                "Eat loads of pies",
                "Wash the cat or dog",
                "Learn React"
            ]
        }
    },

    render: function() {
        return (
            <div style={this.style}>
                {this.state.notes.map(function(text, index) {
                    return (
                        <Note noteText={text} />
                    );
                })}
            </div>
        );
    }

});

module.exports = PostBoard;
