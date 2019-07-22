class Slot extends React.Component {
    render() {
        const slotList = this.props.slotList;
        const styles = {fontSize: "50px", backgroundColor: "purple"}; // when more than one, better to use constants.
        let slot1 = slotList[Math.floor(Math.random()*slotList.length)]; //not sure yet what proper statndards are for function declaration yet.
        let slot2 = slotList[Math.floor(Math.random()*slotList.length)];
        let slot3 = slotList[Math.floor(Math.random()*slotList.length)];
        let outMsg;
        let winnerStyles;
        if (slot1 === slot2 && slot1 == slot3){
            outMsg = "You won!";
            winnerStyles = "Slot-winner"; //can also dynamically defines styles via classNames.
        } else {
            outMsg = "Sorry, you lost...";
            winnerStyles = "Slot-loser";
        }
        return ( // generally you replace var names which correspond to js keywords with React equivalents.
            //also when styling in React you use camelcase instead of hyphens.
            <div className="Slot"> 
                <p style={styles}>{slot1}{slot2}{slot3}</p>
                <p className={winnerStyles}>{outMsg}</p>
                <br/>
            </div>
            
        )
    }
}