// React.js Component - RadioGroup

var RadioGroup = React.createClass({displayName: "RadioGroup",
    propTypes: {
        title: React.PropTypes.string.isRequired,
        vertical: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired,
        other: React.PropTypes.bool,
        required: React.PropTypes.bool,
    },
    getDefaultProps: function() {
        return {
            title: "Main title label",
            vertical: true,
            name: "unnamed",
            other: true
        };
    },
    getInitialState: function() {
        return {
            value: -1
        }
    },
    componentWillMount: function() {
        var rbs = [];
        for (var i=0; i < this.props.children.length; i++) {
            var rb = this.props.children[i];
            var value = {
                label: rb.props.children || rb.props.label,
                value: rb.props.value,
            }
            if (rb.props.checked) {
                this.setState({ value: i });
            }
            rbs.push(value);
        }
        this.setState({ buttons: rbs });
    },
    componentDidMount: function() {
        if (this.props.debug) {
            window[this.props.name] = this;
        }
    },
    optionChanged: function(e) {
        if (e.target.type == "radio") {
            this.setState({ value: e.target.getAttribute("data-key") });
        }
    },
    getValue: function() {
        var key = this.state.value;
        var otherKey = this.state.buttons.length;
        if (key >= 0 && key < otherKey) {
            return this.state.buttons[key].value;
        } else if (key == otherKey) {
            return this.refs.otherInput.getValue();
        }
        return null;
    },
    validate: function() {
        if (this.props.required) {
            var val = this.getValue()
            return val != null && val != "";
        }
        return true;
    },
    validateAndMark: function() {
        var valid = this.validate();
        if (!valid) {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
        return valid;
    },
    render: function() {
        var style = {
            background: this.state.error ? "yellow" : null,
            border: this.state.error ? "1px solid red" : null,
            padding: "0.5em",
            margin: "1em 0"
        }
        var content = [];
        for(var i in this.state.buttons) {
            var val = this.state.buttons[i];
            var rb = React.createElement(RadioButton, {
                        name: this.props.name, 
                        value: val.value, 
                        key: i, 
                        id: parseInt(i), 
                        checked: this.state.value == i}, 
                            val.label
                    );
            content.push(rb);
            if (this.props.vertical) {
                content.push(React.createElement("br", {key: "bk_"+i}));
            }
        }
        if (this.props.other) {
            var key = this.state.buttons.length;
            var other = React.createElement("span", {key: key}, 
                    React.createElement(RadioButton, {
                        name: this.props.name, 
                        value: "other", 
                        key: key, 
                        id: key, 
                        checked: this.state.value == key}, 
                            "Other: "
                    )
                );
            content.push(other);
            if (this.state.value == key) {
                var input = React.createElement(TextInput, {
                                name: this.props.name, 
                                ref: "otherInput", 
                                inline: true, 
                                key: key+1}, 
                                    "Enter other here: "
                                );
                content.push(input);
            }
            if (this.state.error) {
                content.push(React.createElement("p", {key: "error"}, "Please select a value!"));
            }
        }
        return (
            React.createElement("div", {style: style}, 
                this.props.title, React.createElement("br", null), 
                React.createElement("div", {style: {marginLeft: "2em"}, onChange: this.optionChanged}, 
                    content
                 )
            )
        );
    }
});


// <p>
//     {this.props.title}<br />
//     <div style="margin-left:3em;">
//
//         <label>
//             <input
//                 type="radio"
//                 name="referrer"
//                 value="other" />
//                 Other:
//         </label>
//
//         <label>
//             Explain:
//             <input type="text" name="referrer" />
//         </label>
//
//     </div>
// </p>
