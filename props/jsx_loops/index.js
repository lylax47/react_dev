class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name="Elton"
                    hobbies={["piano", "singing", "dancing"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));