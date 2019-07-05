function getMood(){
    const moods = ["Angry", "Hungry", "Sleepy", "Hangry", "Happy", "Silly"];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render(){
        return(
            <div>
                <h1>My current mood is: {getMood()}</h1>
                <h1>An image:</h1>
                <img src="https://images.unsplash.com/photo-1562144438-8fc59d524850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"/>
            </div>  
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));