class Hello extends React.Component {
    render(){
        console.log(this.props);
        const props = this.props; //props are immutable!
        let bangs = "!".repeat(props.bangs);
        return (
            <div>
                <h1>Hi {props.to} from {props.from}{bangs}</h1>
                <img src={props.img}/>
            </div>
        )
    }
}