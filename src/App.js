import './App.css';
import Card from './components/cards.js'
import ReactDOM from 'react-dom/client';

function App() {
  let arr =[] //Array to keep track of current pair

  function handleChoice(card){
      arr.push(card)
        if (arr.length > 1){
          if(arr[0].props.cardText == arr[1].props.cardText){ //Pair is a match
            console.log("MATCH!")
            arr[0].handlePaired()
            arr[1].handlePaired()
            arr = []
          }
          if(arr[0].props.cardText != arr[1].props.cardText){ //Pair is not a match
            console.log("WRONG!")
            arr[0].handleReset()
            arr[1].handleReset()
            arr = []
          }}
  }

  const cardVals = ["Card1","Card2","Card3","Card4","Card1","Card2","Card3","Card4"]
  return (
    <div className="App">
      {cardVals.map((item,idx)=>(<Card key={idx} cardText={item} isFlipped ={true} handleChoice={handleChoice}/>))}
    </div>
  );
}

export default App;
