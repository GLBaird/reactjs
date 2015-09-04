// React.js Component - FormBuilder

var FormBuilder = React.createClass({
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
            children: <p key="0">Create form elements as children</p>,
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
            <form method={this.props.method}
                  action={this.props.action}
                  encType={this.props.encType}
                  onSubmit={this.validate}>

                {children}

                <p>
                    <input type="reset" value="Clear form" />
                    <input type="submit" value="Submit" />
                </p>

            </form>
        );
    }
});
