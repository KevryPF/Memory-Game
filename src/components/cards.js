import React, { useEffect } from 'react';
import '../cards.css'
import ReactDOM from 'react-dom/client';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped: false}
        this.state = {isPaired: false}
        this.state = {cardText: "Card"}
        this.handleReset()
    }

    handleClick = () => {
        this.setState(state => ({isFlipped: this.props.isFlipped}));
        this.setState(state => ({cardText: state.isFlipped ? "Flipped" : "Card"}))
        this.props.handleChoice(this)
    }

    handleReset = () => {
        this.setState(state => ({isFlipped: !state.isFlipped}))
    }

    handlePaired = () => {
        this.setState(state => ({isPaired: !state.isPaired}))
    }

    render() {
        if(this.state.isPaired === true){   // Case where the card is already matched
            return (
                <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'green'}} className="cards">
                    <h1>{this.props.cardText}</h1>
                    <p>{this.state.cardText}</p>
                    <p>{this.state.isFlipped.toString()}</p>
                </div>
            );
        }

        if(this.state.isFlipped === true){  // Case where the card is flipped
            return (
                <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'red'}} className="cards" onClick={this.handleClick}>
                    <h1>{this.props.cardText}</h1>
                    <p>{this.state.cardText}</p>
                    <p>{this.state.isFlipped.toString()}</p>
                </div>
            );
        }

        return (    // Default face-down card
            <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'white'}} className="cards" onClick={this.handleClick}>
                <h1>{this.props.cardText}</h1>
                <p>{this.state.cardText}</p>
            </div>
        )
    }
}

export default Card;