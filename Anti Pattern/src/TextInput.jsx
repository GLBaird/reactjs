// React.js Component - TextInput


var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        children: React.PropTypes.string.isRequired,
        required: React.PropTypes.bool,
        validate: React.PropTypes.string,
        inline: React.PropTypes.bool,
        showError: React.PropTypes.bool,
    },
    getDefaultProps: function() {
        return {
            name: "unnamed",
            children: "Label: ",
            required: false,
            inline: false,
            showError: true
        };
    },
    getInitialState: function() {
        return {
            style: {
                display: this.props.inline ? "inline-block" : "block",
                width: this.props.inline ? "auto" : "100%",
                boxSizing: "border-box",
                border: "1px solid #999",
                borderRadius: "5px",
                fontSize: "1em",
                color: "#444",
                padding: ".3em .5em",
                margin: this.props.inline ? ".5em" : ".1em 0 .5em 0",
                boxShadow: "inset 1px 1px 2px #999",
                outline: "none"
            },
            errorMessage: ""
        };
    },
    componentWillMount: function() {
        if (typeof this.props.style === "object") {
            this.updateStyle(this.props.style);
        }
    },
    componentDidMount: function() {
        if (this.props.debug) {
            window[this.props.name] = this;
        }
    },
    updateStyle: function(newStyles) {
        var current = this.state.style;
        for (var style in newStyles) {
            current[style] = newStyles[style];
        }
        this.setState({ style: current });
    },
    validate: function() {
        var input = React.findDOMNode(this.refs.textInput);
        var value = input.value;
        var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return (
            (this.props.required ? (value != "") : true)
            && (this.props.validate == "email"
                    ? (value.match(emailPattern) != null)
                    : true
                )
        );
    },
    validateAndMark: function(e) {
        var validation = this.validate();
        if (validation) {
            this.updateStyle({
                color: "#444",
                background: "inherit",
                border: "1px solid #999"
            });
            this.setState({ errorMessage : null });
        } else {
            this.updateStyle({
                color: "red",
                background: "yellow",
                border: "1px solid red"
            });
            this.setState({
                errorMessage : this.props.validate == "email"
                    ? "Enter a valid email address"
                    : "Enter a value!"
                });
        }
        if (!e) {
            return validation;
        }
    },
    getValue: function () {
        var input = React.findDOMNode(this.refs.textInput);
        return input.value;
    },
    render: function() {
        return (
            <p>
                <label>
                    {this.props.children}
                    <input
                        type="text"
                        ref="textInput"
                        style={this.state.style}
                        name={this.props.name}
                        onBlur={this.validateAndMark} />
                    </label>
                    { this.props.showError ? this.state.errorMessage : null }
            </p>
        );
    }
});
