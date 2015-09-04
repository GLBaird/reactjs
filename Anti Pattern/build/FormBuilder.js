// React.js Component - FormBuilder

var FormBuilder = React.createClass({displayName: "FormBuilder",
    propTypes: {
        method: React.PropTypes.string,
        action: React.PropTypes.string,
        validate: React.PropTypes.bool,
        errorMessage: React.PropTypes.string,
        debug: React.PropTypes.bool,
        debugName: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            encType: this.constructor.EncTypeURL,
            children: React.createElement("p", {key: "0"}, "Create form elements as children"),
            validate: false,
            errorMessage: "Please check the form for valid data!",
            debugName: "reactForm"
        };
    },
    statics: {
        EncTypeURL: "application/x-www-form-urlencoded",
        EncTypeMulti: "multipart/form-data",
        EncTypePlain: "text/plain"
    },
    componentDidMount: function() {
        if (this.props.debug) {
            window[this.props.debugName] = this;
        }
    },
    validate: function(e) {
        if (this.props.validate) {
            var error = false;
            for(var key in this.refs) {
                var checked = this.refs[key].validateAndMark()
                error = error || !checked;
            }
            if (e && error) {
                e.preventDefault();
                alert(this.props.errorMessage);
            }
        }
    },
    render: function() {
        var children = React.Children.map(this.props.children, function(child, index) {
            return React.addons.cloneWithProps(child, { ref: "item_"+index });
        });
        return (
            React.createElement("form", {method: this.props.method, 
                  action: this.props.action, 
                  encType: this.props.encType, 
                  onSubmit: this.validate}, 

                children, 

                React.createElement("p", null, 
                    React.createElement("input", {type: "reset", value: "Clear form"}), 
                    React.createElement("input", {type: "submit", value: "Submit"})
                )

            )
        );
    }
});
