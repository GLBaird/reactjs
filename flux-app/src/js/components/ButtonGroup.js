var React = require('react');
var PropTypes = React.PropTypes;

var ButtonGroup = React.createClass({
    getDefaultProps: function() {
        return {
            buttons: ["one", "two", "three"]
        };
    },
    getInitialState: function() {
        return {
            selectedButton: 0
        };
    },
    handleClick: function(index) {
        this.setState({ selectedButton: index });
        if (this.props.onChange) {
            this.props.onChange(this.props.buttons[index], index);
        }
    },
    render: function() {
        return (
            <div className="btn-group btn-group-justified" role="group">
                {this.props.buttons.map(function(button, index) {
                    var className = this.state.selectedButton == index
                        ? "btn btn-info"
                        : "btn btn-default";
                    return (
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className={className}
                                onClick={this.handleClick.bind(this, index)}
                            >
                                {button}
                            </button>
                        </div>
                    );
                }.bind(this))}
            </div>
        );
    }

});

module.exports = ButtonGroup;
