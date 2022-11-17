import React from "react";


class GameInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {wins: props.wins}
    }

    render() {
        return (
            <div className ='gameInfo'>
                <h1>Game Info</h1>
                <p>Pairs matched: </p>
                <p>Times Won: </p>
                <p>Game Size: 
                <select id="gSize" value={8} >
                <option value ="8">8</option>
                <option value ="10">10</option>
                <option value ="12">12</option>
                <option value ="14">14</option>
                <option value ="16">16</option>
                </select> 
                Cards
                </p>
                <button className="shuffle">Shuffle</button>
            </div>
        );

    }
}

export default GameInfo;