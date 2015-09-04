/** @jsx React.DOM */

var React = require('react');

var Note = React.createClass({
    propTypes: {
        noteText: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },
    getDefaultProps: function() {
        return {
            noteText: "This is my note"
        };
    },
    getInitialState: function() {
        return {
            editMode: false,
            editText: null
        }
    },
    editNote: function(e) {
        this.setState({
            editMode: true,
            editText: this.props.noteText
        });
    },
    updateEditText: function(e) {
        this.setState({editText: e.target.value});
    },
    trashNote: function(e) {
        if (typeof this.props.onRemove === "function") {
            this.props.onRemove();
        }
    },
    saveChanges: function() {
        if (typeof this.props.onChange === "function") {
            this.props.onChange(this.state.editText);
        }
        this.setState({editMode: false});
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
                <textarea onChange={this.updateEditText} value={this.state.editText}></textarea>
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
