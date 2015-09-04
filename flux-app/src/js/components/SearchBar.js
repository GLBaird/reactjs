/** @jsx React.DOM */

var React = require('react');

var AppActions = require('../actions/AppActions');

var TextInput = require('./TextInput');
var ButtonGroup = require('./ButtonGroup');

var SearchBar = React.createClass({
    getInitialState: function() {
        return {
            searchText: "",
            category: "All"
        };
    },
    handleChange: function(type, value) {
        AppActions.searchData(type+":"+value);
    },
    render: function() {
        return (
            <div className="well">
                <TextInput onChange={this.handleChange.bind(this, "search")} />
                <p style={{marginTop:"1em"}}>Department:</p>
                <ButtonGroup buttons={['All', 'London', 'Paris']} onChange={this.handleChange.bind(this, "category")} />
            </div>
        );
    }
});

module.exports = SearchBar;
