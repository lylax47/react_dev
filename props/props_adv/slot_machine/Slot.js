class Slot extends React.Component {
    render() {
        const slotList = this.props.slotList;
        let slot1 = slotList[Math.floor(Math.random()*slotList.length)]; //not sure yet what proper statndards are for function declaration yet.
        let slot2 = slotList[Math.floor(Math.random()*slotList.length)];
        let slot3 = slotList[Math.floor(Math.random()*slotList.length)];
        let outMsgå
        if (slot1 === slot2 && slot1 == slot3){
            outMsg = "You won!"
        } else {
            outMsg = "Sorry, you lost..."
        }
        return (
            <div>
                <p>{slot1}{slot2}{slot3}</p>
                <p>{outMsg}</p>
                <br/>
            </div>
            
        )
    }
}