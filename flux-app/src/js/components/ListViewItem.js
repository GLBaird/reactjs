/** @jsx React.DOM */

var React = require('react');

var ListViewItem = React.createClass({
    getDefaultProps: function() {
        return {
            name: "unknown",
            category: "unkown location",
            children: "no further info",
            image: "http://placehold.it/50x50"
        };
    },
    render: function() {
        return (
            <li className="list-group-item">
                <img src={this.props.image} className="img-circle" style={{ width: "4em", float:"left", marginRight:"1em"}} />
                <h3 className="list-group-item-heading">{this.props.name} <small>{this.props.category}</small></h3>
                <p className="list-group-item-text">{this.props.children}</p>
            </li>
        );
    }
});


module.exports = ListViewItem;
