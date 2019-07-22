class Hello extends React.Component {
    static defaultProps = { //deafult props is a specific keyword in React.
        from: "Anonymous",
        bangs: 1
    }
    render(){
        let bangs = "!".repeat(this.props.bangs);
        return(
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
            </div>
        )
    }
}