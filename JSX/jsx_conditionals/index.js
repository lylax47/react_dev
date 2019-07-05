function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}


class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7){
            msg = 
                <div>
                    <h1>You will see this msg if seven.</h1>
                </div>
        } else {
            msg = 
                <div>
                    <h1>No msgs for you!</h1>
                </div>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                <p>{num === 7 ? "Seven sucks..." : "Good thing it's not seven."}</p>
                {
                    num === 7 && //if true this will also be true on it's own.
                    <img src="https://media1.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif?cid=790b76115d1fcc276945414a73021dfd&rid=giphy.gif"/> 
                }
                <p>{msg}</p>
            </div>
        );
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById("root"));