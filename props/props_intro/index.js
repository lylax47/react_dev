class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="me" from="you" />
                <Hello to="you" from="me" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));