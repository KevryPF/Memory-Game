import './App.css';
import Card from './components/cards.js'
import React, { useEffect, useState } from 'react';
import Popup from './components/popup';

function App() {

  const [cardV, setCardv] = useState([])
  const [paired, setPaired] = useState([])
  const [wins, setWins] = useState(0)
  const [gameSize, setGameSize] = useState(4)

  let arr = [] //Array to keep track of current pair
  let cards = ["Card1","Card2","Card3","Card4","Card5","Card6","Card7","Card8"]
  let cardVals = cards.slice(0,gameSize).concat(cards.slice(0,gameSize))  //Selects first gameSize cards and then doubles the cards so there are pairs of each card

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
    setPaired([])
    setCardv(cards)
  }

  return (
    <>
    <div className='content'>
      <Popup func = {() => shuffle(cardVals)} wins = {wins}></Popup>
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
        <p>Game Size: 
        <select id="gSize" value={gameSize} onChange={() => {setGameSize(document.getElementById("gSize").value/2)}}>
          <option value ="8">8</option>
          <option value ="10">10</option>
          <option value ="12">12</option>
          <option value ="14">14</option>
          <option value ="16">16</option>
        </select> 
        Cards
        </p>
      </div>
    </div>

    </>

  );
}

export default App;
