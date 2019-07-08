class App extends React.Component {
    render() {
        const slotList = ["🍇", "🍋", "🍒"]
        return (
            <div>
                <h1>Slot Machine</h1>
                < Slot
                    slotList={slotList}
                />
                < Slot
                    slotList={slotList}
                />
                < Slot
                    slotList={slotList}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("slot"));