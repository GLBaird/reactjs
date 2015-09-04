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
                {text: "Get milk from the shops", id:1},
                {text: "Eat loads of pies", id:2},
                {text: "Wash the cat or dog", id:3},
                {text: "Learn React", id:4}
            ]
        };
    },

    updateHandler: function(index, newText) {
        var changes = this.state.notes;
        changes[index].text = newText;
        this.setState({ notes: changes });
    },

    removeHandler: function(index) {
        var changes = this.state.notes;
        changes.splice(index, 1);
        this.setState({ notes: changes });
    },

    getUniqueID: function() {
        this.counter = this.counter || 0;
        return counter++;
    },

    render: function() {
        return (
            <div style={this.style}>
                {this.state.notes.map(function(data, index) {
                    return (
                        <Note
                            onRemove={this.removeHandler.bind(this, index)}
                            onChange={this.updateHandler.bind(this, index)}
                            noteText={data.text}
                            key={data.id} />
                    );
                }.bind(this))}
            </div>
        );
    }

});

module.exports = PostBoard;
