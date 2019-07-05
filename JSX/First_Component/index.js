class Hello extends React.Component {
	render(){
		return ( //need to wrap everything in one tag if you have more than one.
			<div>
				<h1>Hello there.</h1>
				<h1>Hello there.</h1>
				<h1>Hello there.</h1>
			</div>
		)
	}
}

ReactDOM.render(<Hello/>, document.getElementById("root"));
