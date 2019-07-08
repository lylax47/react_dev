class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="me"  //better to break up props with line breaks
                    from="you" 
                    num={3}
                    data={[1,2,3,4,5]}
                    isFunny //auto set to True
                    bangs={4}
                    img="https://images.unsplash.com/photo-1562337683-f309a8d2da9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3400&q=80"
                />
                <Hello to="you" from="me" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));