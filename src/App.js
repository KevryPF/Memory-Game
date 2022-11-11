import './App.css';
import Card from './components/cards.js'
import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import Popup from './components/popup';

function App(props) {
  let cardVals = ["Card1","Card2","Card3","Card4","Card1","Card2","Card3","Card4"]
  const [cardV, setCardv] = useState([])
  const [paired, setPaired] = useState([])
  const [wins, setWins] = useState()
  
  useEffect(() =>{
    setCardv(["Card1","Card2","Card3","Card4","Card1","Card2","Card3","Card4"])
    setPaired([])
    setWins(0)
  }, [])

  let arr = [] //Array to keep track of current pair
  let paired1 = [] //Array to keep track of paired cards

  function handleChoice(card){
      arr.push(card)
        if (arr.length > 1){
          if(arr[0].props.cardText == arr[1].props.cardText){ //Pair is a match
            console.log("MATCH!")
            handlePause()
            setPaired(paired.concat(arr))
            arr[0].handlePaired()
            arr[1].handlePaired()
            arr = []
            if (paired.length == cardVals.length-2){  //Win Case
              console.log("WIN")
              setWins(wins+1)
              document.getElementsByClassName('Popup')[0].style["display"] = 'block';
            }
          }
          if(arr[0].props.cardText != arr[1].props.cardText){ //Pair is not a match
            console.log("WRONG!")
            handlePause()
            arr[0].handleReset()
            arr[1].handleReset()
            arr = []
          }}
  }


  function handleWin() {
    
    shuffle(cardVals)
  }

  function handlePause(){ //Turns off click functionality when comparing card choices
    document.getElementById("gameContainer").style.pointerEvents = 'none'
    setTimeout(() => document.getElementById("gameContainer").style.pointerEvents = 'auto', 1000)
  }

  function shuffle(cards){  //Shuffles Cards and resets selected cards
    console.log("Shuffle")
    let numofCards = cards.length, temp, randomNum
    while(numofCards) {
      randomNum = Math.floor(Math.random() * (numofCards)--)
      temp = cards[numofCards]
      cards[numofCards] = cards[randomNum]
      cards[randomNum] = temp
    }
    for (let i = 0; i < paired.length; i++){
      paired[i].handlePaired()
      paired[i].handleReset()
    }
    setPaired([])
    setCardv(cards)
  }

  return (
    <>
    
    <div className='content'>
      <Popup func = {() => shuffle(cardVals)}></Popup>
      <div className='buttonDiv'>
        <button className="shuffle" onClick = {() => shuffle(cardVals)}>Shuffle</button>
      </div>
      <div className="App" id="gameContainer">
        {cardV.map((item,idx)=>{return <Card key={idx} disabled={false} cardText={item} handleChoice={handleChoice}/>})}
      </div>
      <div>
        <h1>Game Info</h1>
        <p>Pairs matched: {paired.length/2}/{cardVals.length/2}</p>
        <p>Times Won: {wins}</p>
      </div>
    </div>

    </>

  );
}

export default App;
