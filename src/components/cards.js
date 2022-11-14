import React, { useEffect } from 'react';
import '../cards.css'

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
        console.log(this.props.cardText)
        this.props.handleChoice(this)
    }

    handleReset = () => {
        setTimeout(() => {this.setState(state => ({isFlipped: !state.isFlipped}))},1000)

    }

    handlePaired = () => {
        setTimeout(() => {this.setState(state => ({isPaired: !state.isPaired}))},1000)
    }

    render() {
        if(this.state.isPaired === true){   // Case where the card is already matched
            return (
                <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'green'}} className="cards">
                    <h1>Card</h1>
                    <p>{this.props.cardText}</p>
                </div>
            );
        }

        if(this.state.isFlipped === true){  // Case where the card is flipped
            return (
                <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'red'}} className="cards" onClick={this.handleClick}>
                    <h1>{this.props.cardText}</h1>
                </div>
            );
        }

        return (                            // Default face-down card
            <div style={{height:'100px', width:'75px', borderStyle:'solid', borderColor:'white'}} className="cards" onClick={this.handleClick}>
                    <h1>Card</h1>
                    <p>{this.props.cardText}</p>
            </div>
        )
    }
}

export default Card;