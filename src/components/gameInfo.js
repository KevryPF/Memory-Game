import React from "react";


class GameInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {wins: props.wins}
        this.state = {paired: props.paired}
    }

    render() {
        return (
            <div className ='gameInfo'>
                <h1>Game Info</h1>
                <p>Pairs matched: {this.props.paired.length/2}/{this.props.gameSize} </p>
                <p>Game Size: 
                <select id="gSize" value={this.props.gameSize*2} onChange={() => this.props.setGameSize()}>
                <option value ="8">8</option>
                <option value ="10">10</option>
                <option value ="12">12</option>
                <option value ="14">14</option>
                <option value ="16">16</option>
                </select> 
                Cards
                </p>
                <h3>Your stats</h3>
                <p>Times Won: {this.props.wins} </p>
                <p>Current Accuracy: {Math.trunc((this.props.paired.length/this.props.clicks)*100) || 0}%</p>
                <button className="shuffle" onClick={() => this.props.shuffle()}>Shuffle</button>

            </div>
        );

    }
}

export default GameInfo;