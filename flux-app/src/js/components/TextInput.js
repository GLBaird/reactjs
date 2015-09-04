var React = require('react');

var TextInput  = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value || ""
        }
    },
    handleChange: function(e) {
        var newValue = e.target.value;
        this.setState({ value: newValue });
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    },
    render: function() {
        return (
            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-search"> </span></span>
                <input onChange={this.handleChange} value={this.state.value} type="text" className="form-control" placeholder="Search for..." aria-describedby="basic-addon1" />
            </div>
        );
    }

});

module.exports = TextInput;
