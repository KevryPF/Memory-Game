import React, { useEffect } from 'react';
import '../cards.css'
import google from '../images/google.png'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped: false}
        this.state = {isPaired: false}
        this.state = {cardText: "Card"}
    }

    handleClick = () => {
        this.setState(state => ({isFlipped: !state.isFlipped}));
        this.setState(state => ({cardText: state.isFlipped ? "Flipped" : "Card"}))
        this.props.handleChoice(this)
    }

    handleReset = (time) => {
        setTimeout(() => {this.setState(state => ({isFlipped: false}))},time)

    }

    handlePaired = (time) => {
        setTimeout(() => {this.setState(state => ({isPaired: !state.isPaired}))},time)
    }

    render() {
        if(this.props.revealAll === true) {
            return(
                <div style={{height:'125px', width:'100px', borderStyle:'solid', borderColor:'green'}} className="cards" id="flipped">
                    <img src ={this.props.cardText} width = '75px'></img>
                </div>
            )
        }

        if(this.state.isPaired === true){   // Case where the card is already matched or all cards are forcibly flipped
            return (
                
                <div style={{height:'125px', width:'100px', borderStyle:'solid', borderColor:'green'}} className="cards" id="flipped">
                    <img src ={this.props.cardText} width = '75px'></img>
                </div>
            );
        }

        if(this.state.isFlipped === true){  // Case where the card is flipped
            return (
                <div style={{height:'125px', width:'100px', borderStyle:'solid', borderColor:'red'}} className="cards" id="flipped" onClick={this.handleClick}>
                    <img src ={this.props.cardText} width = '75px'></img>
                </div>
            );
        }

        return (                            // Default face-down card
            <div style={{height:'125px', width:'100px', borderStyle:'solid', borderColor:'white'}} className="cards" id="notFlipped" onClick={this.handleClick}>
                    <h1>Card</h1>
            </div>
        )
    }
}

export default Card;