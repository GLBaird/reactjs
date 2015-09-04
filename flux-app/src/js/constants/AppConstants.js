var Constants = {
    PayloadSources: {
        get VIEW_ACTION()       { return "com.flux-app.payloadsources.view_action"; },
        get SERVER_ACTION()     { return "com.flux-app.payloadsources.server_action"; },
        get APP_ACTION()        { return "com.flux-app.payloadsources.app_action"; }
    },

    ActionTypes: {
        get SEND_REQUEST()      { return "com.flux-app.actiontype.send_request" },
        get SEARCH_QUERY()      { return "com.flux-app.actiontype.search_query" },
        get DATA_SPLICE()       { return "com.flux-app.actiontype.data_splice" }
    },

    AppEvents: {
        get DATA_CHANGED()      { return "com.flux-app.actiontype.data_changed" },
    },

    DataSources: {
        get DUMMY_JSON()       { return "http://api.randomuser.me/?results=30" }
    }
};

module.exports = Constants;
