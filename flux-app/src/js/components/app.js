/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../store/AppStore');
var Constants = require('../constants/AppConstants');

var TitleBar = require('../components/Titlebar');
var ListView = require('../components/ListView.js');
var SearchBar = require('../components/SearchBar');



var App = React.createClass({

    getDefaultProps: function() {
        return {
            data: []
        };
    },

    componentWillMount: function() {
        AppActions.loadData();
        AppStore.on(Constants.AppEvents.DATA_CHANGED, this.updateDate);
    },

    updateDate: function(data) {
        this.setProps({data: data});
    },

    render: function() {
        return (
            <div>
                <div className="container theme-showcase" role="main">
                    <TitleBar mainTitle="Demo Flux App" subTitle="Contacts" />
                    <SearchBar />

                    <p>Current addresses from online data: </p>
                    <ListView data={this.props.data} />
                </div>
            </div>
        );
    }
});

module.exports = App;
