var MyWidget = React.createClass({displayName: "MyWidget",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "My funny Widget"), 
                React.createElement("p", null, "Welcome to components")
            )
        );
    }
});
