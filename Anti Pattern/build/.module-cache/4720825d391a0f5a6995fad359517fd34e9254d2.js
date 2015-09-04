var components = React.render(
    React.createElement(FormBuilder, {validate: true, debug: true, debugName: "tester"}, 
        React.createElement(TextInput, {name: "username", showError: false, required: true}, "Username:"), 
        React.createElement(TextInput, {name: "surname", required: true}, "Surname:"), 
        React.createElement(TextInput, {name: "forename", required: true}, "Forename:"), 
        React.createElement(TextInput, {name: "email", inline: true, validate: "email"}, "Email:"), 
        React.createElement(RadioGroup, {name: "referrer", title: "How did you hear about us?", other: true, required: true}, 
            React.createElement(RadioButton, {value: "newspaper"}, "Newspaper"), 
            React.createElement(RadioButton, {value: "tv"}, "Television"), 
            React.createElement(RadioButton, {value: "social"}, "Social networking"), 
            React.createElement(RadioButton, {value: "google"}, "Google addwords"), 
            React.createElement(RadioButton, {value: "mobile"}, "Mobile advertising"), 
            React.createElement(RadioButton, {value: "recommend"}, "Recommendation")
        )
    ),
    document.getElementById("reactComponents")
);
