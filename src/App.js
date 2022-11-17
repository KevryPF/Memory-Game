import './App.css';
import Card from './components/cards.js'
import React, { useEffect, useState } from 'react';
import Popup from './components/popup';
import GameInfo from './components/gameInfo';
import { arrayLogos } from './logos.js'

function App() {

  const [cardV, setCardv] = useState([])
  const [paired, setPaired] = useState([])
  const [wins, setWins] = useState(0)
  const [gameSize, setGameSize] = useState(4)
  const [clicks, setClicks] = useState(0)

  let arr = [] //Array to keep track of current pair
  let cardVals = arrayLogos.slice(0,gameSize).concat(arrayLogos.slice(0,gameSize))  //Selects first gameSize cards and then doubles the cards so there are pairs of each card
  
  useEffect(() =>{
    setCardv(cardVals)
    setPaired([])
    shuffle(cardVals)
  }, [gameSize])

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
            setClicks(clicks + 2)
            if (paired.length == cardVals.length-2){          //Win Case
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
            setClicks(clicks + 2)
          }}
          
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
    setClicks(0)
    setPaired([])
    setCardv(cards)
  }

  return (
    <>

    <div className='content'>
      <div className='navBar'>
        <h1>Match the Logos!</h1>
      </div>
      <div className='leftBar'>
        <GameInfo wins={wins} paired={paired} gameSize={gameSize} shuffle={() => shuffle(cardVals)} setGameSize={() => setGameSize(document.getElementById("gSize").value/2)} clicks = {clicks}/>
      </div>
        <Popup func = {() => shuffle(cardVals)} wins = {wins}></Popup>
      <div className="App" id="gameContainer">
        {cardV.map((item,idx)=>{return <Card key={idx} disabled={false} cardText={item} handleChoice={handleChoice}/>})}
      </div>
    </div>

    </>

  );
}

export default App;
