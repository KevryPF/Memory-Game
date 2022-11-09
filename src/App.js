import './App.css';
import Card from './components/cards.js'
import React from 'react';

function App() {
  let arr =[] //Array to keep track of current pair

  function handleChoice(card){
      arr.push(card)
        if (arr.length > 1){
          if(arr[0].props.cardText == arr[1].props.cardText){ //Pair is a match
            console.log("MATCH!")
            handlePause()
            arr[0].handlePaired()
            arr[1].handlePaired()
            arr = []
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

  function shuffle(cards){
    let numofCards = cards.length, temp, randomNum
    while(numofCards) {
      randomNum = Math.floor(Math.random() * (numofCards)--)
      temp = cards[numofCards]
      cards[numofCards] = cards[randomNum]
      cards[randomNum] = temp
    }
    return cards
  }

  let cardVals = ["Card1","Card2","Card3","Card4","Card1","Card2","Card3","Card4"]
  shuffle(cardVals);
  return (
    <div className="App" id="gameContainer">
      {cardVals.map((item,idx)=>{return <Card key={idx} disabled={false} cardText={item} isFlipped={true} handleChoice={handleChoice}/>})}
    </div>
  );
}

export default App;
