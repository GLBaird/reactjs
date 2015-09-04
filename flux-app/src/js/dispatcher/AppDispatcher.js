var Dispatcher = require('flux').Dispatcher;
var Constants  = require('../constants/AppConstants');
var assign     = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
          source: Constants.PayloadSources.VIEW_ACTION,
          action: action
        });
    },
    dispatchAppAction: function(action) {
        this.dispatch({
            source: Constants.PayloadSources.APP_ACTION,
            action: action
        });
    },
    dispatchServerAction: function(action) {
        this.dispatch({
            source: Constants.PayloadSources.SERVER_ACTION,
            action: action
        });
    }
});

module.exports = AppDispatcher;
