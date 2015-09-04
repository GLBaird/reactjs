
var Greetings = React.createClass({

    displayName: "GreetingsComponent",

    getDefaultProps: function() {
        return {
            children: "No Message received",
            title: "Person",
            name: "unnamed"
        };
    },

    componentWillMount: function() {
        console.log("Will Mount");
    },

    componentDidMount: function() {
        console.log("Did Mount");
    },

    componentWillReceiveProps: function(nextProps) {
        console.log("Will receive props:", nextProps);
    },

    render: function() {
        console.log("I am arendering and " +
            (this.isMounted()
                ? "I am mounted"
                : "I am not mounted"
            )
        );
        return (
            <div>
                <h1>Welcome {this.props.title}</h1>
                <p>Hi there {this.props.name}</p>
                <p>Message: {this.props.children}</p>
            </div>
        );
    }

});
