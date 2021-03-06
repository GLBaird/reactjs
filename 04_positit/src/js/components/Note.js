/** @jsx React.DOM */

var React = require('react');

var $ = require('jquery');
require('jquery-ui');

var Note = React.createClass({
    propTypes: {
        noteText: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },
    generateRandom: function(min,max) {
        return (min + Math.ceil( Math.random() * (max-min) ));
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
    componentWillMount: function() {
        this.style = this.style || {
            left: this.generateRandom(30, $('body').width()-160)+"px",
            top: this.generateRandom(50, $('body').height()-160)+"px",
            WebkitTransform: 'rotate('+this.generateRandom(-30, 30)+'deg)',
            MozTransform: 'rotate('+this.generateRandom(-30, 30)+'deg)',
            OTransform: 'rotate('+this.generateRandom(-30, 30)+'deg)',
            transform: 'rotate('+this.generateRandom(-30, 30)+'deg)',
        };
    },
    componentDidMount: function() {
        var node = React.findDOMNode(this);
        $(node).draggable({stack: ".note"});
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
            <div className="note" style={this.style}>
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
            <div className="note" style={this.style}>
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
