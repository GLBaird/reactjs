
var style = {
    background: "blue",
    border: "1px solid red"
};

React.render(
    <div>
        <Greetings className="class" style={style} name="Leon Baird" title="Ginger Man">
            This is a lovely day and a nive view
        </Greetings>
        <Greetings />
    </div>,
    document.getElementById('component')
);
