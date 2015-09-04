/** @jsx React.DOM */

var React = require('react');

var Note = React.createClass({
    propTypes: {
        noteText: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            noteText: "This is my note"
        };
    },
    getInitialState: function() {
        return {
            editMode: false
        }
    },
    editNote: function(e) {
        console.log("Changing");
        this.setState({ editMode: true });
    },
    trashNote: function(e) {
        alert("Trash");
    },
    saveChanges: function() {
        alert("SAVE");
    },
    getNoteLayout: function() {
        return (
            <div className="note">
                <p>{this.props.noteText}</p>
                <p className="buttons">
                    <button onClick={this.editNote} className="btn btn-sm glyphicon glyphicon-pencil"> </button>
                    <button onClick={this.trashNote} className="btn btn-sm glyphicon glyphicon-trash"> </button>
                </p>
            </div>
        );
    },
    getEditLayout: function() {
        return (
            <div className="note">
                <textarea value={this.props.noteText}></textarea>
                <p className="buttons">
                    <button onClick={this.saveChanges} className="btn btn-sm glyphicon glyphicon-floppy-save"> </button>
                </p>
            </div>
        );
    },
    render: function() {
        var content = this.state.editMode
            ? this.getEditLayout()
            : this.getNoteLayout();

        return content;
    }
});

module.exports = Note;
