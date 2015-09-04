var Dispatcher = require('../dispatcher/AppDispatcher');
var Constants  = require('../constants/AppConstants');


var AppActions = {

    loadData: function() {
        console.log("LOADING DATA ACTION");
        Dispatcher.dispatchAppAction({
            actionType: Constants.ActionTypes.SEND_REQUEST,
            url: Constants.DataSources.DUMMY_JSON
        });
    },

    searchData: function(query) {
        Dispatcher.handleViewAction({
            actionType: Constants.ActionTypes.SEARCH_QUERY,
            query: query
        });
    },

    removeItem: function(index) {
        Dispatcher.handleViewAction({
            actionType: Constants.ActionTypes.DATA_SPLICE,
            index: index
        });
    }

};

module.exports = AppActions;
