/** @jsx React.DOM */

var React = require('react');
var ListViewItem = require('./ListViewItem');

var ListView = React.createClass({

    getDefaultProps: function() {
        return {
            data: []
        };
    },

    render: function() {
        return (
            <ul className="list-group">
                {this.props.data.map(function(item, index) {
                    var name = item.user.name.title+" "+item.user.name.first+" "+item.user.name.last;
                    var image = item.user.picture.thumbnail;
                    var category = item.category;
                    var info = item.user.gender+", phone: "+item.user.phone+", email: "+item.user.email;
                    return (
                        <ListViewItem
                            name={name}
                            image={image}
                            category={category}
                            key={item.user.registered}>{info}</ListViewItem>
                    );
                }.bind(this))}
            </ul>
        );
    }

});

module.exports = ListView;
