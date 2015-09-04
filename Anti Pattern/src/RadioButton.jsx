// React.js Component - RadioButton

var RadioButton = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        id: React.PropTypes.number.isRequired
    },
    styles: {
        checked: {
            WebkitAppearance: "none",
            appearance: "none",
            display: "inline-block",
            border: "1px solid #444",
            borderRadius: "50%",
            background: "#999",
            verticalAlign: "sub",
            width: "1.5em",
            height: "1.5em",
            marginRight: ".5em",
            marginLeft: "1em",
            boxShadow: "1px 1px 1px #999",
            outline: "none"
        },
        unChecked: {
            WebkitAppearance: "none",
            appearance: "none",
            display: "inline-block",
            border: "1px solid #444",
            borderRadius: "50%",
            background: "#EFEFEF",
            verticalAlign: "sub",
            width: "1.5em",
            height: "1.5em",
            marginRight: ".5em",
            marginLeft: "1em",
            boxShadow: "inset 1px 1px 1px #999",
            outline: "none"
        }
    },
    getDefaultProps: function() {
        return {
            name: "unnamed",
            value: "value",
            label: "label",
            id: 0
        };
    },
    getInitialState: function() {
        return {
            selected: false,
            color: null
        };
    },
    componentWillMount: function() {
        if (this.props.checked) {
            this.setState({ selected: true });
        }
        if (this.props.color) {
            this.setState({ color: this.props.color })
        }
    },
    componentWillReceiveProps: function(nextProps) {
        if (typeof nextProps.checked === "boolean" && this.state.checked != nextProps.checked) {
            this.setState({ selected: nextProps.checked });
        }
    },
    componentDidMount: function() {
        if (this.props.debug) {
            window[this.props.name] = this;
        }
    },
    isSelected: function() {
        return this.state.selected;
    },
    render: function() {
        var style = this.isSelected() ? this.styles.checked : this.styles.unChecked;
        if (this.state.color && this.isSelected()) {
            style.background = this.state.color;
        }
        return (
            <label>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    defaultChecked={this.state.selected}
                    style={style}
                    data-key={this.props.id} />
                { this.props.children || this.props.label }
            </label>
        );
    }
});
