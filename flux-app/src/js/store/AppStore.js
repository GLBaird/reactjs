var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var AppStore = assign({}, EventEmitter.prototype, {

    data: [],
    results: null,

    requestData: function(url) {
        $.getJSON(url, function(json, textStatus) {
            console.log('jQuery JSON request with status: "+textStatus+"\ndata arrived: ', json);
            if (Array.isArray(json.results)) {
                this.data = json.results.map(function(item, index) {
                    item.category = this.generateCategory();
                    return item;
                }.bind(this));
                this.emitChange();
            } else {
                console.log("INVALID JSON DATA!");
            }
        }.bind(this));
    },
    searchQuery: function(query) {
        var mode = query.split(":")[0];
        var data = query.split(":")[1].toLowerCase();
        if ((mode == "category" && data == "all")
            || (mode == "search" && data == "")) {
            this.results = null;
        } else {

            var results = this.data.filter(function(item, index) {
                if (mode == "category" && item.category.toLowerCase() == data) {
                    return true;
                } else if (mode == "category") {
                    return false;
                }

                function recursiveTesting(obj, data) {
                    for (var prop in obj) {
                        if (typeof obj[prop] === "string"
                            && obj[prop].toLowerCase().indexOf(data) >= 0)
                        {
                            return true;
                        }
                        if (typeof obj[prop] === "object"
                            && recursiveTesting(obj[prop], data))
                        {
                            return true;
                        }
                        if (obj[prop] == data) {
                            return true;
                        }
                    }
                    return false;
                }
                var searchComponents = data.split(" ");
                var found = true;
                for (var i in searchComponents) {
                    found = found && recursiveTesting(item, searchComponents[i]);
                }
                return found;
            }.bind(this));
            this.results = results;
        }
        this.emitChange();
    },
    removeItem: function(index) {
        if (typeof this.data[index] != "undefined") {
            var removed = this.data.splice(index, 1);
            console.log("Removed "+removed+" at index "+index+".");
            this.emitChange();
        } else {
            console.error("Invalid index "+index+".");
        }
    },
    generateCategory: function() {
        var cat = Math.ceil(Math.random() * 2);
        return cat == 1 ? "London" : "Paris";
    },
    emitChange: function() {
        this.emit(Constants.AppEvents.DATA_CHANGED, this.results || this.data);
    }
});

// listen for events
AppDispatcher.register(function(payload){
    switch (payload.action.actionType) {
        case Constants.ActionTypes.SEND_REQUEST:
            AppStore.requestData(payload.action.url);
            break;
        case Constants.ActionTypes.SEARCH_QUERY:
            AppStore.searchQuery(payload.action.query);
            break;
        case Constants.ActionTypes.DATA_SPLICE:
            AppStore.searchQuery(payload.action.index);
            break;

        default:
            console.error('unknown action: '+payload.action.actionType);
            return false;
    }
    return true;
});

module.exports = AppStore;
