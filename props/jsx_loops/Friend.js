class Friend extends React.Component {
    render(){
        const {name, hobbies} = this.props; // can also add the mapping as a const here if very complicated structure.
        return(
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}