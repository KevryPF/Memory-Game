import React from 'react';
import '../popup.css';

class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = {wins: props.wins}
    }

    closePopup = () => {
        document.getElementsByClassName('Popup')[0].style["display"] = 'none';
    }

    render() {
        return(
            <div className='Popup'>
                <button className='closeBtn' onClick={this.closePopup}>X</button>
                <div className='winText'>
                    <h1>You Won!</h1>
                    <p>Current win streak: {this.props.wins}</p> 
                </div>
                <button className='again' onClick={() => {this.props.func(); this.closePopup()}}>Go Again</button>
            </div>
        )
    }
}

export default Popup;
