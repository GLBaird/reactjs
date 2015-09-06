/** @jsx React.DOM */

var React = require('react');

var Note = require('./Note');

var PostBoard = React.createClass({

    style: {
        backgroundColor: "#b59c31",
        backgroundImage: "url(images/cork.jpg)",
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0"
    },

    getInitialState: function() {
        return {
            notes: []
        };
    },

    componentWillMount: function() {
        // load saved notes
        if (window.localStorage && JSON && localStorage.notes) {
            var notes = JSON.parse(localStorage.notes);
            if (notes) {
                this.setState({ notes: notes });
            }
        }
    },

    componentWillUpdate: function() {
        // save notes to localStorage
        if (window.localStorage, JSON && this.state.notes.length > 0) {
            localStorage.notes = JSON.stringify(this.state.notes);
        }
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
        if (window.localStorage && this.state.notes.length == 0) {
            // erase local storage if no notes left
            localStorage.removeItem('notes');
        }
    },

    getUniqueID: function() {
        // using a timestamp
        return Date.now() / 1000;
    },

    addNote: function() {
        var notes = this.state.notes;
        notes.push({
            text: "New Note",
            id: this.getUniqueID()
        });
        this.setState({ notes: notes });
    },

    render: function() {
        return (
            <div style={this.style}>
                <header>
                    <h1>Post Board</h1>
                    <button onClick={this.addNote} className='btn glyphicon glyphicon-plus'> </button>
                </header>
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
