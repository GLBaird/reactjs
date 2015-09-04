/** @jsx React.DOM */

var React = require('react');

var TitleBar = React.createClass({
    getDefaultProps: function() {
        return {
            mainTitle: "TITLE",
            subTitle: "SUB"
        };
    },
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <h1>{this.props.mainTitle} <small>{this.props.subTitle}</small></h1>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = TitleBar;
