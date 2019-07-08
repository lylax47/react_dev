class Hello extends React.Component {
    render(){
        console.log(this.props);
        const props = this.props; //props are immutable!
        return (
            <h1>Hi {props.to} from {props.from}!</h1>
        )
    }
}